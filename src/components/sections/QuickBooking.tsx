import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function QuickBooking() {
  const [category, setCategory] = useState<string>("all");
  const [period, setPeriod] = useState<string>("week");
  const navigate = useNavigate();

  const submit = () => {
    const params = new URLSearchParams();
    if (category !== "all") params.set("cat", category);
    if (period) params.set("period", period);
    navigate(`/flota?${params.toString()}`);
  };

  return (
    <section className="container-page -mt-6 sm:-mt-10 relative z-10">
      <div className="rounded-2xl border border-border bg-card p-4 shadow-elevate sm:p-6">
        <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Categorie</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toate vehiculele</SelectItem>
                <SelectItem value="masina">Masina</SelectItem>
                <SelectItem value="scuter">Scuter</SelectItem>
                <SelectItem value="bicicleta">Bicicleta electrica</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Perioada</label>
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">1 saptamana</SelectItem>
                <SelectItem value="month">1 luna</SelectItem>
                <SelectItem value="3months">3 luni</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button size="lg" className="h-12 shadow-elevate" onClick={submit}>
            <Search className="h-4 w-4" /> Vezi disponibilitate
          </Button>
        </div>
      </div>
    </section>
  );
}
