import { FileText, Download, Send, Printer, Plus } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const currentInvoice = {
  invoiceNumber: 'INV-2025-1034',
  date: '2025-10-28',
  dueDate: '2025-11-15',
  client: {
    name: 'John Anderson',
    email: 'john.anderson@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Luxury Lane, Beverly Hills, CA 90210',
  },
  services: [
    { name: 'Full Body Wrap - Matte Black', quantity: 1, rate: 2500, amount: 2500 },
    { name: 'Chrome Delete Package', quantity: 1, rate: 800, amount: 800 },
    { name: 'Window Tinting - Ceramic', quantity: 1, rate: 600, amount: 600 },
  ],
  materials: [
    { name: '3M Matte Black Vinyl (60ft)', quantity: 60, rate: 12, amount: 720 },
    { name: 'Chrome Delete Material', quantity: 20, rate: 8, amount: 160 },
    { name: 'Ceramic Tint Film', quantity: 1, rate: 200, amount: 200 },
  ],
};

const recentInvoices = [
  { number: 'INV-2025-1033', client: 'Sarah Chen', amount: 3200, status: 'paid', date: '2025-10-25' },
  { number: 'INV-2025-1032', client: 'Mike Johnson', amount: 4500, status: 'pending', date: '2025-10-20' },
  { number: 'INV-2025-1031', client: 'Emma Davis', amount: 2800, status: 'paid', date: '2025-10-15' },
];

export function Invoice() {
  const serviceSubtotal = currentInvoice.services.reduce((sum, item) => sum + item.amount, 0);
  const materialSubtotal = currentInvoice.materials.reduce((sum, item) => sum + item.amount, 0);
  const subtotal = serviceSubtotal + materialSubtotal;
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white text-3xl mb-2">Invoice Management</h1>
          <p className="text-slate-400">Generate and manage client invoices</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0">
          <Plus className="w-4 h-4 mr-2" />
          New Invoice
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Invoices */}
        <div className="space-y-4">
          <h3 className="text-white text-lg">Recent Invoices</h3>
          {recentInvoices.map((invoice) => (
            <GlassCard
              key={invoice.number}
              className="p-4 cursor-pointer hover:border-blue-400/50 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-400">{invoice.number}</span>
                <div className={`px-2 py-1 rounded text-xs ${
                  invoice.status === 'paid'
                    ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                }`}>
                  {invoice.status}
                </div>
              </div>
              <p className="text-white mb-1">{invoice.client}</p>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">{new Date(invoice.date).toLocaleDateString()}</span>
                <span className="text-white">${invoice.amount.toLocaleString()}</span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Main Invoice */}
        <div className="lg:col-span-2">
          <GlassCard glow className="p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-white text-2xl">LuxeSticker</h2>
                    <p className="text-slate-400 text-sm">Premium Vehicle Customization</p>
                  </div>
                </div>
                <div className="text-sm text-slate-400">
                  <p>456 Business Blvd</p>
                  <p>Los Angeles, CA 90001</p>
                  <p>contact@luxesticker.com</p>
                  <p>+1 (555) 000-0000</p>
                </div>
              </div>
              <div className="text-right">
                <h1 className="text-white text-3xl mb-2">INVOICE</h1>
                <p className="text-blue-400 mb-4">{currentInvoice.invoiceNumber}</p>
                <div className="text-sm space-y-1">
                  <div className="flex justify-end gap-4">
                    <span className="text-slate-400">Date:</span>
                    <span className="text-white">{new Date(currentInvoice.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-end gap-4">
                    <span className="text-slate-400">Due Date:</span>
                    <span className="text-white">{new Date(currentInvoice.dueDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="bg-white/10 mb-8" />

            {/* Client Info */}
            <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-slate-400 text-sm mb-2">Bill To:</p>
              <h3 className="text-white text-lg mb-2">{currentInvoice.client.name}</h3>
              <div className="text-sm text-slate-400 space-y-1">
                <p>{currentInvoice.client.address}</p>
                <p>{currentInvoice.client.email}</p>
                <p>{currentInvoice.client.phone}</p>
              </div>
            </div>

            {/* Services */}
            <div className="mb-6">
              <h4 className="text-white mb-4">Services</h4>
              <div className="space-y-2">
                {currentInvoice.services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div className="flex-1">
                      <p className="text-white">{service.name}</p>
                      <p className="text-slate-400 text-sm">Qty: {service.quantity} × ${service.rate}</p>
                    </div>
                    <span className="text-blue-400">${service.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div className="mb-8">
              <h4 className="text-white mb-4">Materials</h4>
              <div className="space-y-2">
                {currentInvoice.materials.map((material, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div className="flex-1">
                      <p className="text-white">{material.name}</p>
                      <p className="text-slate-400 text-sm">Qty: {material.quantity} × ${material.rate}</p>
                    </div>
                    <span className="text-blue-400">${material.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="bg-white/10 mb-6" />

            {/* Totals */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-between text-slate-400">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator className="bg-white/10" />
              <div className="flex items-center justify-between text-white text-2xl">
                <span>Total</span>
                <span className="text-blue-400">${total.toLocaleString()}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-400">
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
              <Button className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-400">
                <Send className="w-4 h-4 mr-2" />
                Send
              </Button>
              <Button variant="outline" className="border-white/10 text-slate-400 hover:text-white hover:border-white/20">
                Edit
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
