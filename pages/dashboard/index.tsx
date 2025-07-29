import Link from 'next/link'

export default function Dashboard() {
  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-green-700">🧮 Store Management Panel</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        <Link href="/dashboard/sales">
          <div className="bg-white shadow rounded-lg p-6 hover:bg-green-50 cursor-pointer">
            <h2 className="text-lg font-bold mb-2">💵 Sales</h2>
            <p className="text-sm text-gray-600">Register and manage customer sales</p>
          </div>
        </Link>

        <Link href="/dashboard/inventory">
          <div className="bg-white shadow rounded-lg p-6 hover:bg-green-50 cursor-pointer">
            <h2 className="text-lg font-bold mb-2">📦 Inventory</h2>
            <p className="text-sm text-gray-600">Manage product stock and updates</p>
          </div>
        </Link>

        <Link href="/dashboard/qr-scanner">
          <div className="bg-white shadow rounded-lg p-6 hover:bg-green-50 cursor-pointer">
            <h2 className="text-lg font-bold mb-2">📷 QR Scanner</h2>
            <p className="text-sm text-gray-600">Scan customer QR to give cashback</p>
          </div>
        </Link>

        <Link href="/dashboard/employees">
          <div className="bg-white shadow rounded-lg p-6 hover:bg-green-50 cursor-pointer">
            <h2 className="text-lg font-bold mb-2">👨‍🔧 Employees</h2>
            <p className="text-sm text-gray-600">Payroll and employee management</p>
          </div>
        </Link>

        <Link href="/dashboard/profit">
          <div className="bg-white shadow rounded-lg p-6 hover:bg-green-50 cursor-pointer">
            <h2 className="text-lg font-bold mb-2">📈 Profit & Reports</h2>
            <p className="text-sm text-gray-600">Track profits, losses and insights</p>
          </div>
        </Link>

        <Link href="/dashboard/credit-management">
          <div className="bg-white shadow rounded-lg p-6 hover:bg-yellow-50 cursor-pointer border border-yellow-400">
            <h2 className="text-lg font-bold mb-2 text-yellow-600">🏦 Credit System</h2>
            <p className="text-sm text-gray-700">Approve & track credit customers</p>
          </div>
        </Link>

      </div>
    </main>
  )
}
