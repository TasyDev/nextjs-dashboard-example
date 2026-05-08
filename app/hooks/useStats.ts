import { useState, useEffect } from 'react'

export type StatRange = 'last-7-days' | 'last-30-days'

export function useStats(statType: 'visitors' | 'sales' | 'all' = 'all') {
  const [visitors, setVisitors] = useState([])
  const [sales, setSales] = useState([])
  const [visitorErrMsg, setVisitorErrMsg] = useState<string | undefined>()
  const [salesErrMsg, setSalesErrMsg] = useState<string | undefined>()
  const [loadingVisitors, setLoadingVisitors] = useState(true)
  const [loadingSales, setLoadingSales] = useState(true)
  const [range, setRange] = useState<StatRange>('last-7-days')

  useEffect(() => {
    const fetchData = async () => {
      if (statType === 'all' || statType === 'sales') {
        setLoadingSales(true)
        setSalesErrMsg(undefined)
      }
      if (statType === 'all' || statType === 'visitors') {
        setLoadingVisitors(true)
        setVisitorErrMsg(undefined)
      }

      try {
        const response = await fetch(`/api/stats/${range}`)
        if (!response.ok) {
          throw new Error("Failed to fetch statistic data")
        }

        const data = await response.json()
        
        if (statType === 'all' || statType === 'sales') {
          setSales(data.sales)
          setLoadingSales(false)
        }
        if (statType === 'all' || statType === 'visitors') {
          setVisitors(data.visitors)
          setLoadingVisitors(false)
        }
      } catch (err: any) {
        if (statType === 'all' || statType === 'sales') {
          setLoadingSales(false)
          setSalesErrMsg(err.message)
        }
        if (statType === 'all' || statType === 'visitors') {
          setLoadingVisitors(false)
          setVisitorErrMsg(err.message)
        }
      }
    }

    fetchData()
  }, [range, statType])

  return {
    visitors,
    sales,
    loadingVisitors,
    loadingSales,
    visitorErrMsg,
    salesErrMsg,
    range,
    setRange
  }
}
