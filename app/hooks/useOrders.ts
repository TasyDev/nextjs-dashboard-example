import { useState, useEffect } from 'react'

export type OrderStatus = 'all' | 'paid' | 'unpaid'

export interface Order {
  no: string
  name: string
  status: 'paid' | 'unpaid'
  total: number
}

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [errMsg, setErrMsg] = useState<string | undefined>()
  const [status, setStatus] = useState<OrderStatus>('all')
  const [total, setTotal] = useState<{ all: number; paid: number; unpaid: number } | undefined>()

  useEffect(() => {
    setLoading(true)
    setErrMsg(undefined)

    const fetchData = async () => {
      try {
        const limit = total ? (total[status === 'all' ? 'all' : status] || 20) : 20
        const response = await fetch(`/api/orders/new?s=${status}&limit=${limit}`)
        
        if (!response.ok) {
          throw new Error("Failed to fetch new orders")
        }

        const data = await response.json()
        setOrders(data.orders)
        
        if (status === 'all') {
          setTotal({ all: 20, paid: data.totalPaid, unpaid: data.totalUnpaid })
        }
        setLoading(false)
      } catch (err: any) {
        setLoading(false)
        setErrMsg(err.message)
      }
    }

    fetchData()
  }, [status])

  return { orders, loading, errMsg, status, setStatus }
}
