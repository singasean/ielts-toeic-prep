import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home, 
  Calculator, 
  BookOpen, 
  ClipboardCheck, 
  HelpCircle,
  Bell,
  User,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Score Calculator', href: '/calculator', icon: Calculator },
  { 
    label: 'Course Materials', 
    href: '/materials',
    icon: BookOpen,
    children: [
      { label: 'IELTS', href: '/materials/ielts' },
      { label: 'TOEIC', href: '/materials/toeic' },
    ]
  },
  { label: 'Assessments', href: '/assessments', icon: ClipboardCheck },
  { label: 'Help', href: '/help', icon: HelpCircle },
];

export const TopNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="gradient-bg h-9 w-9 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">Q</span>
            </div>
            <span className="font-bold text-xl hidden sm:block">
              <span className="gradient-text">Quippy</span>
              <span className="text-foreground"> Test Prep</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className={cn(
                        'gap-1',
                        isActive(item.href) && 'bg-secondary text-primary'
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-40">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.label} asChild>
                        <Link to={child.href} className="w-full cursor-pointer">
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  key={item.label}
                  variant="ghost"
                  asChild
                  className={cn(
                    isActive(item.href) && 'bg-secondary text-primary'
                  )}
                >
                  <Link to={item.href} className="gap-1">
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </Button>
              )
            )}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full gradient-bg text-[10px] font-bold flex items-center justify-center text-primary-foreground">
                3
              </span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="space-y-1">
                    <div className="px-3 py-2 text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className={cn(
                          'block px-6 py-2 text-sm rounded-lg transition-colors',
                          isActive(child.href)
                            ? 'bg-secondary text-primary font-medium'
                            : 'hover:bg-secondary/50'
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={cn(
                      'flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors',
                      isActive(item.href)
                        ? 'bg-secondary text-primary font-medium'
                        : 'hover:bg-secondary/50'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
