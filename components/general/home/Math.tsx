import React, { useState } from 'react'
import Heading from '../../ui/Heading';
import { TextField } from '@/components/ui/TextField';
import { Button } from '../../ui/Button';
import Chart from "@/components/ui/Chart"
import { ChartData } from 'chart.js';

const initialChartData: ChartData<"bar"> = {
  labels: ["1. Gün", "2. Gün", "3. Gün", "4. Gün", "5. Gün", "6. Gün"],
  datasets: [
    {
      label: 'Veri yok',
      data: [],
      backgroundColor: '#fff',
    },
  ],
};

export default function Math() {
  const [area, setArea] = useState<number | null>(null)
  const [efficiency, setEfficiency] = useState<number | null>(null)
  const [sunLight, setSunLight] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(initialChartData)

  const handleSubmit = () => {
    if (area === null || efficiency === null || sunLight === null) return;

    setLoading(true);

    setTimeout(() => {
      const dailyEnergy = area * (efficiency / 100) * sunLight;
      const monthlyData = Array(6).fill(Number(dailyEnergy.toFixed(2)));
      setData({
        labels: ["1. Gün", "2. Gün", "3. Gün", "4. Gün", "5. Gün", "6. Gün"],
        datasets: [
          {
            label: 'Günlük Enerji Üretimi (kWh)',
            data: monthlyData,
            backgroundColor: '#b073ed',
            borderColor: '#a78be1',
          },
        ],
      });

      setLoading(false);
    }, 1750);
  }

  // Hata kontrolü
  const areaError =
    area !== null
      ? area > 1500
        ? "1500'den büyük değer giremezsin!"
        : area < 0
          ? "Mantıksızlığa hayır !!"
          : null
      : null;

  const efficiencyError =
    efficiency !== null
      ? efficiency > 100
        ? "Daha yüksek değer girilemez"
        : efficiency < 0
          ? "Daha küçük değer girilemez!"
          : null
      : null;

  const sunLightError =
    sunLight !== null
      ? sunLight > 24
        ? "Daha fazla değer girilemez."
        : sunLight < 0
          ? "Mantıksızlığa Hayır !!"
          : null
      : null;

  const isDisabled = !!(areaError || efficiencyError || sunLightError || area === null || efficiency === null || sunLight === null);

  return (
    <section className='flex flex-col items-center responsive gap-12'>
      <Heading size="4xl">Haydi, Sen Hesapla!</Heading>
      <div className='flex flex-wrap w-full gap-6 lg:gap-12 justify-between'>
        <header className='flex flex-col gap-5 flex-1/4'>
          <TextField value={area || ""} error={areaError} onChange={(e) => setArea(Number(e.target.value))} type='number' description='Güneş panellerinin yüzey alanı' placeholder='Alan (m²)' />
          <TextField value={efficiency || ""} error={efficiencyError} onChange={(e) => setEfficiency(Number(e.target.value))} type='number' description='Güneş panelinin ışığı elektriğe dönüştürme verimliliği' placeholder='Verimlilik (%)' />
          <TextField value={sunLight || ""} error={sunLightError} onChange={(e) => setSunLight(Number(e.target.value))} type='number' description='Güneşin panele vurma süresi' placeholder='Işık Süresi (s)' />
          <Button loading={loading} disabled={isDisabled} onClick={handleSubmit} icon={"solar:alt-arrow-right-outline"}>
            <span>Grafiğe Dönüştür</span>
            <span>Grafiğe Dönüştürülüyor</span>
            </Button>
        </header>
        <footer className='flex-3/4 overflow-hidden lg:flex-2/4'>
          <Chart className='h-96' type='bar' data={data} />
        </footer>
      </div>
    </section>
  )
}
