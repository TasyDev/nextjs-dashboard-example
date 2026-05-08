'use client'

import * as XLSX from "xlsx"
import Loading from '../loading'
import { useOrders } from '../hooks/useOrders'
import { moneyFormat, formatDate } from '../lib/utils'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import { Card } from './ui/Card'
import { Table, THead, TBody, TR, TH, TD } from './ui/Table'

export default function NewOrders() {
  const { orders, loading, errMsg, status, setStatus } = useOrders()

  const downloadExcel = () => {
    if (orders && orders.length > 0) {
      const workbook = XLSX.utils.book_new()
      const worksheet = XLSX.utils.json_to_sheet(orders)
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Orders')
      XLSX.writeFile(workbook, `order-${status}-${formatDate(new Date())}.xlsx`)
    }
  }

  const Filters = (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => setStatus('all')} variant={status === 'all' ? 'primary' : 'outline'}>
        All
      </Button>
      <Button onClick={() => setStatus('paid')} variant={status === 'paid' ? 'primary' : 'outline'}>
        Paid
      </Button>
      <Button onClick={() => setStatus('unpaid')} variant={status === 'unpaid' ? 'primary' : 'outline'}>
        Unpaid
      </Button>
      <Button onClick={downloadExcel} variant="primary" className="ml-0 md:ml-2">
        Download Excel
      </Button>
    </div>
  )

  return (
    <Card title="New Orders" headerActions={Filters}>
      {/* Table Section */}
      <Table>
        <THead>
          <TH className="w-[1%]">#</TH>
          <TH>No. Order</TH>
          <TH>Customer Name</TH>
          <TH className="w-[1%] text-center">Status</TH>
          <TH className="text-right">Total Amount</TH>
        </THead>
        <TBody>
          {loading || errMsg ? (
            <TR>
              <TD colSpan={5} className="py-8 text-center">
                {loading ? <Loading /> : <span className="text-red-500 font-medium">{errMsg}</span>}
              </TD>
            </TR>
          ) : (
            orders.map((order, index) => (
              <TR key={order.no}>
                <TD className="w-[1%] text-slate-500 font-mono">{index + 1}</TD>
                <TD className="font-medium text-slate-700 dark:text-slate-200">{order.no}</TD>
                <TD className="text-slate-600 dark:text-slate-400">{order.name}</TD>
                <TD className="w-[1%]">
                  <Badge variant={order.status}>{order.status}</Badge>
                </TD>
                <TD className="text-right font-semibold text-slate-800 dark:text-slate-100">
                  {moneyFormat(order.total)}
                </TD>
              </TR>
            ))
          )}
        </TBody>
      </Table>
    </div>
  )
}