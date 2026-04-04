import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { LogOut } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  company: string | null;
  country: string | null;
  email: string;
  phone: string | null;
  message: string | null;
  status: string;
  created_at: string;
}

const AdminPage = () => {
  const { t } = useLanguage();
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'natan2025') {
      setAuthenticated(true);
      setError('');
    } else {
      setError(t.admin.wrongPassword);
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });
    setLeads(data || []);
    setLoading(false);
  };

  useEffect(() => {
    if (authenticated) fetchLeads();
  }, [authenticated]);

  const markContacted = async (id: string) => {
    await supabase.from('leads').update({ status: 'contacted' }).eq('id', id);
    fetchLeads();
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-muted/30">
        <form onSubmit={handleLogin} className="bg-card border border-border rounded-xl p-8 w-full max-w-sm space-y-4">
          <h1 className="text-2xl font-heading font-bold text-foreground text-center">{t.admin.title}</h1>
          <Input
            type="password"
            placeholder={t.admin.passwordLabel}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="font-body"
          />
          {error && <p className="text-sm text-destructive font-body">{error}</p>}
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading">
            {t.admin.login}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-heading font-bold text-foreground">{t.admin.leads}</h1>
          <Button variant="outline" onClick={() => setAuthenticated(false)} className="font-body">
            <LogOut className="w-4 h-4 mr-2" />
            {t.admin.logout}
          </Button>
        </div>

        {loading ? (
          <p className="text-muted-foreground font-body">Loading...</p>
        ) : leads.length === 0 ? (
          <p className="text-muted-foreground font-body">{t.admin.noLeads}</p>
        ) : (
          <div className="bg-card border border-border rounded-xl overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-heading">{t.admin.date}</TableHead>
                  <TableHead className="font-heading">{t.admin.name}</TableHead>
                  <TableHead className="font-heading">{t.admin.company}</TableHead>
                  <TableHead className="font-heading">{t.admin.country}</TableHead>
                  <TableHead className="font-heading">{t.admin.email}</TableHead>
                  <TableHead className="font-heading">{t.admin.phone}</TableHead>
                  <TableHead className="font-heading">{t.admin.message}</TableHead>
                  <TableHead className="font-heading">{t.admin.status}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="font-body text-sm whitespace-nowrap">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="font-body">{lead.name}</TableCell>
                    <TableCell className="font-body">{lead.company || '—'}</TableCell>
                    <TableCell className="font-body">{lead.country || '—'}</TableCell>
                    <TableCell className="font-body">{lead.email}</TableCell>
                    <TableCell className="font-body">{lead.phone || '—'}</TableCell>
                    <TableCell className="font-body text-sm max-w-[200px] truncate">{lead.message || '—'}</TableCell>
                    <TableCell>
                      {lead.status === 'contacted' ? (
                        <Badge className="bg-secondary/10 text-secondary border-secondary/30 font-body">
                          {t.admin.contacted}
                        </Badge>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => markContacted(lead.id)}
                          className="text-xs font-body"
                        >
                          {t.admin.markContacted}
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
