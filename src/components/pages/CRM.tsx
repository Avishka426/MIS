import { useState } from 'react';
import { Search, Phone, Mail, Calendar, Car, MessageSquare, Plus } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const customers = [
  {
    id: 1,
    name: 'John Anderson',
    email: 'john.anderson@email.com',
    phone: '+1 (555) 123-4567',
    vehicles: [{ make: 'Tesla', model: 'Model S', year: 2023, plate: 'ABC-1234' }],
    totalSpent: 12450,
    lastVisit: '2025-10-20',
    satisfaction: 98,
    appointments: [{ date: '2025-11-05', service: 'Full Wrap Consultation' }]
  },
  {
    id: 2,
    name: 'Sarah Chen',
    email: 'sarah.chen@email.com',
    phone: '+1 (555) 234-5678',
    vehicles: [{ make: 'BMW', model: 'M5', year: 2024, plate: 'XYZ-5678' }],
    totalSpent: 8900,
    lastVisit: '2025-10-25',
    satisfaction: 95,
    appointments: [{ date: '2025-11-08', service: 'Chrome Delete' }]
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.j@email.com',
    phone: '+1 (555) 345-6789',
    vehicles: [{ make: 'Audi', model: 'RS6', year: 2023, plate: 'DEF-9012' }],
    totalSpent: 15600,
    lastVisit: '2025-10-15',
    satisfaction: 100,
    appointments: []
  },
];

export function CRM() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white text-3xl mb-2">Customer Relationship Management</h1>
          <p className="text-slate-400">Manage client relationships and vehicle records</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0">
          <Plus className="w-4 h-4 mr-2" />
          Add Customer
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer List */}
        <div className="space-y-4">
          <GlassCard className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Search customers..."
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </GlassCard>

          <div className="space-y-3 max-h-[700px] overflow-y-auto">
            {filteredCustomers.map((customer) => (
              <GlassCard
                key={customer.id}
                className={`p-4 cursor-pointer transition-all ${
                  selectedCustomer.id === customer.id
                    ? 'border-blue-400/50 bg-blue-500/10'
                    : 'hover:border-blue-400/30'
                }`}
                onClick={() => setSelectedCustomer(customer)}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white">
                    {customer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white mb-1">{customer.name}</h4>
                    <p className="text-slate-400 text-sm">{customer.email}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-blue-400">${customer.totalSpent.toLocaleString()} spent</span>
                      <span className="text-xs text-green-400">{customer.satisfaction}% satisfied</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Customer Details */}
        <div className="lg:col-span-2 space-y-4">
          <GlassCard glow className="p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/50">
                {selectedCustomer.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h2 className="text-white text-2xl mb-2">{selectedCustomer.name}</h2>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Mail className="w-4 h-4" />
                    {selectedCustomer.email}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Phone className="w-4 h-4" />
                    {selectedCustomer.phone}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-400">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </Button>
                <Button className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                <p className="text-slate-400 text-sm mb-1">Total Spent</p>
                <p className="text-white text-2xl">${selectedCustomer.totalSpent.toLocaleString()}</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                <p className="text-slate-400 text-sm mb-1">Satisfaction</p>
                <p className="text-white text-2xl">{selectedCustomer.satisfaction}%</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                <p className="text-slate-400 text-sm mb-1">Last Visit</p>
                <p className="text-white text-2xl">{new Date(selectedCustomer.lastVisit).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
              </div>
            </div>

            <Tabs defaultValue="vehicles" className="w-full">
              <TabsList className="bg-white/5 border border-white/10">
                <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="vehicles" className="mt-4 space-y-3">
                {selectedCustomer.vehicles.map((vehicle, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                        <Car className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white">{vehicle.year} {vehicle.make} {vehicle.model}</h4>
                        <p className="text-slate-400 text-sm">Plate: {vehicle.plate}</p>
                      </div>
                      <Button className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-400">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="appointments" className="mt-4 space-y-3">
                {selectedCustomer.appointments.length === 0 ? (
                  <p className="text-slate-400 text-center py-8">No upcoming appointments</p>
                ) : (
                  selectedCustomer.appointments.map((appointment, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white">{appointment.service}</h4>
                          <p className="text-slate-400 text-sm">{new Date(appointment.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </TabsContent>
              <TabsContent value="history" className="mt-4">
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white">Full Body Wrap - Matte Black</span>
                      <span className="text-blue-400">$2,500</span>
                    </div>
                    <p className="text-slate-400 text-sm">October 20, 2025</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white">Window Tinting</span>
                      <span className="text-blue-400">$400</span>
                    </div>
                    <p className="text-slate-400 text-sm">September 15, 2025</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
