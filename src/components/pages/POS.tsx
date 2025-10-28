import { useState } from 'react';
import { Search, ShoppingCart, CreditCard, User } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

const products = [
  { id: 1, name: 'Matte Black Vinyl', category: 'Material', price: 450, image: '🎨' },
  { id: 2, name: 'Gloss Carbon Fiber', category: 'Material', price: 850, image: '✨' },
  { id: 3, name: 'Chrome Finish', category: 'Material', price: 1200, image: '💎' },
  { id: 4, name: 'Satin White', category: 'Material', price: 500, image: '🤍' },
  { id: 5, name: 'Metallic Blue', category: 'Material', price: 650, image: '💙' },
  { id: 6, name: 'Racing Stripes', category: 'Design', price: 350, image: '🏁' },
  { id: 7, name: 'Full Body Wrap', category: 'Service', price: 2500, image: '🚗' },
  { id: 8, name: 'Window Tinting', category: 'Service', price: 400, image: '🪟' },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export function POS() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPayment, setShowPayment] = useState(false);

  const addToCart = (product: typeof products[0]) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white text-3xl mb-2">Point of Sale</h1>
          <p className="text-slate-400">Process orders and manage transactions</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0">
          <User className="w-4 h-4 mr-2" />
          Customer Lookup
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Grid */}
        <div className="lg:col-span-2 space-y-4">
          <GlassCard className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Search products, materials, services..."
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </GlassCard>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <GlassCard
                key={product.id}
                className="p-4 cursor-pointer hover:border-blue-400/50 transition-all group"
                onClick={() => addToCart(product)}
              >
                <div className="text-4xl mb-3 text-center">{product.image}</div>
                <h4 className="text-white mb-1 text-center">{product.name}</h4>
                <p className="text-slate-400 text-sm mb-2 text-center">{product.category}</p>
                <p className="text-blue-400 text-center">${product.price}</p>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button className="w-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-400">
                    Add to Cart
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-4">
          <GlassCard glow className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-white text-xl">Order Summary</h3>
            </div>

            <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-slate-400 text-center py-8">Cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white">{item.name}</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded bg-white/10 hover:bg-white/20 text-white"
                        >
                          -
                        </button>
                        <span className="text-white w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded bg-white/10 hover:bg-white/20 text-white"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-blue-400">${item.price * item.quantity}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="space-y-2 py-4 border-t border-white/10">
              <div className="flex items-center justify-between text-slate-400">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-white text-xl pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button
              onClick={() => setShowPayment(true)}
              disabled={cart.length === 0}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0 h-12"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Process Payment
            </Button>
          </GlassCard>
        </div>
      </div>

      {/* Payment Modal */}
      <Dialog open={showPayment} onOpenChange={setShowPayment}>
        <DialogContent className="bg-gradient-to-br from-slate-900 to-blue-950 border border-blue-400/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Process Payment</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-slate-400 text-sm mb-1">Total Amount</p>
              <p className="text-white text-3xl">${total.toFixed(2)}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button className="h-20 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-400 flex-col">
                <CreditCard className="w-6 h-6 mb-2" />
                Card
              </Button>
              <Button className="h-20 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-400 flex-col">
                <DollarSign className="w-6 h-6 mb-2" />
                Cash
              </Button>
            </div>
            <Button
              onClick={() => {
                setShowPayment(false);
                setCart([]);
              }}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0"
            >
              Complete Transaction
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function DollarSign({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
