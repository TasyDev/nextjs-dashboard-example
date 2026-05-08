'use client'

import {
  XAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer,
  LineChart, Line,
  BarChart, Bar
} from "recharts"
import Loading from '../loading'
import { useStats, StatRange } from '../hooks/useStats'
import { Card } from './ui/Card'
import { Button } from './ui/Button'

export default function StatisticCharts() {
  const {
    visitors,
    sales,
    loadingVisitors,
    loadingSales,
    visitorErrMsg,
    salesErrMsg,
    range,
    setRange
  } = useStats('all')

  const RangeButtons = ({ current, onChange }: { current: StatRange, onChange: (r: StatRange) => void }) => (
    <>
      <Button 
        variant={current === 'last-30-days' ? 'primary' : 'outline'} 
        onClick={() => onChange('last-30-days')}
      >
        30 Days
      </Button>
      <Button 
        variant={current === 'last-7-days' ? 'primary' : 'outline'} 
        onClick={() => onChange('last-7-days')}
      >
        7 Days
      </Button>
    </>
  )

  return (
    <div className="flex flex-col md:flex-row gap-brand-lg">
      {/* Visitors Chart */}
      <Card 
        className="w-full md:w-1/2" 
        title="Visitors"
        headerActions={<RangeButtons current={range} onChange={setRange} />}
      >
        <div className="h-[300px]">
          {loadingVisitors ? (
            <div className="h-full flex justify-center items-center"><Loading /></div>
          ) : visitorErrMsg ? (
            <div className="h-full flex justify-center items-center text-brand-danger">{visitorErrMsg}</div>
          ) : (
            <ResponsiveContainer width="100%" height="100%" className="text-brand-xs">
              <LineChart data={visitors} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-brand-secondary/20" vertical={false} />
                <XAxis dataKey="date" stroke="var(--color-brand-secondary)" />
                <Legend verticalAlign="top" height={40} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--color-brand-surface-dark)', border: 'none', borderRadius: '8px', color: 'var(--color-brand-text-dark)' }}
                  itemStyle={{ color: 'var(--color-brand-text-dark)' }}
                />
                <Line type="monotone" dataKey="views" name="Page Views" stroke="var(--color-brand-accent)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="visitor" name="Visitors" stroke="var(--color-brand-success)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </Card>

      {/* Sales Chart */}
      <Card 
        className="w-full md:w-1/2" 
        title="Sales"
        headerActions={<RangeButtons current={range} onChange={setRange} />}
      >
        <div className="h-[300px]">
          {loadingSales ? (
            <div className="h-full flex justify-center items-center"><Loading /></div>
          ) : salesErrMsg ? (
            <div className="h-full flex justify-center items-center text-brand-danger">{salesErrMsg}</div>
          ) : (
            <ResponsiveContainer width="100%" height="100%" className="text-brand-xs">
              <BarChart data={sales} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-brand-secondary/20" vertical={false} />
                <XAxis dataKey="date" stroke="var(--color-brand-secondary)" />
                <Legend verticalAlign="top" height={40} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--color-brand-surface-dark)', border: 'none', borderRadius: '8px', color: 'var(--color-brand-text-dark)' }}
                />
                <Bar dataKey="sales" name="Total Orders" fill="var(--color-brand-accent)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="paid" name="Paid Orders" fill="var(--color-brand-success)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </Card>
    </div>
  )
}