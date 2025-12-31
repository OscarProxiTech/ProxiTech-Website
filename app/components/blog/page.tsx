"use client"

import { ThemeWrapper } from "@/components/theme-wrapper"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Info } from "lucide-react"
import { Toaster } from "@/components/ui/toaster"

function ComponentExample({ name, description, children }: { name: string; description: string; children: React.ReactNode }) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-gray-900">{name}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="p-6 bg-gray-50 rounded-lg border border-dashed">
          {children}
        </div>
      </CardContent>
    </Card>
  )
}

function ComponentSection({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="space-y-8">
        {children}
      </div>
    </section>
  )
}

export default function BlogComponentsPage() {
  return (
    <ThemeWrapper>
      <Navbar />
      <main className="min-h-screen pt-20 bg-gray-950">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Component Showcase - Blog Theme</h1>
            <p className="text-lg text-gray-300">
              Mixed theme with dark background and light content cards.
            </p>
          </div>

          {/* Logo Section */}
          <section className="mb-12">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-900">Blog Theme Logos</CardTitle>
                <CardDescription className="text-gray-600">Logos for mixed theme (dark background, light cards)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-8 p-6 bg-gray-50 rounded-lg">
                  <div className="flex flex-col items-center gap-2">
                    <img src="/images/logos/proxitech-icon-dark.png" alt="ProxiTech Icon Dark" className="h-16 w-16" />
                    <span className="text-sm text-gray-600">Icon (Dark)</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <img src="/images/branding/proxitech-logo-dark.png" alt="ProxiTech Logo Dark" className="h-12 w-auto" />
                    <span className="text-sm text-gray-600">Full Logo (Dark)</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <img src="/images/logos/proxitech-icon.png" alt="ProxiTech Icon" className="h-16 w-16" />
                    <span className="text-sm text-gray-600">Icon (Light - for cards)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <div className="space-y-12">
            <ComponentSection title="Actions" description="Interactive button components">
              <ComponentExample name="Button" description="Primary action buttons">
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button size="sm">Small</Button>
                  <Button size="lg">Large</Button>
                </div>
              </ComponentExample>
            </ComponentSection>

            <ComponentSection title="Forms" description="Form input components">
              <ComponentExample name="Input" description="Text input field">
                <div className="space-y-4 max-w-md">
                  <Input placeholder="Enter text..." />
                  <Input type="email" placeholder="Email address" />
                  <Input disabled placeholder="Disabled input" />
                </div>
              </ComponentExample>

              <ComponentExample name="Textarea" description="Multi-line text input">
                <Textarea placeholder="Enter your message..." className="max-w-md" />
              </ComponentExample>

              <ComponentExample name="Label" description="Form field labels">
                <div className="space-y-2 max-w-md">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" />
                </div>
              </ComponentExample>

              <ComponentExample name="Checkbox" description="Checkbox input">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
              </ComponentExample>

              <ComponentExample name="Switch" description="Toggle switch">
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>
              </ComponentExample>

              <ComponentExample name="Radio Group" description="Radio button group">
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Option One</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Option Two</Label>
                  </div>
                </RadioGroup>
              </ComponentExample>

              <ComponentExample name="Select" description="Dropdown select">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </ComponentExample>
            </ComponentSection>

            <ComponentSection title="Data Display" description="Components for displaying data">
              <ComponentExample name="Badge" description="Status badges and labels">
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </ComponentExample>

              <ComponentExample name="Avatar" description="User avatar">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
              </ComponentExample>

              <ComponentExample name="Table" description="Data table">
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Role</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>John Doe</TableCell>
                        <TableCell><Badge>Active</Badge></TableCell>
                        <TableCell>Admin</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Jane Smith</TableCell>
                        <TableCell><Badge variant="secondary">Inactive</Badge></TableCell>
                        <TableCell>User</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </ComponentExample>
            </ComponentSection>

            <ComponentSection title="Layout" description="Layout components">
              <ComponentExample name="Card" description="Card container">
                <Card className="w-[350px] bg-white">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Card Title</CardTitle>
                    <CardDescription className="text-gray-600">Card description goes here</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">Card content area</p>
                  </CardContent>
                </Card>
              </ComponentExample>

              <ComponentExample name="Separator" description="Visual separator">
                <div className="space-y-4 w-[300px]">
                  <div>Content above</div>
                  <Separator />
                  <div>Content below</div>
                </div>
              </ComponentExample>

              <ComponentExample name="Accordion" description="Collapsible content">
                <Accordion type="single" collapsible className="w-[400px]">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that match the other components.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ComponentExample>
            </ComponentSection>

            <ComponentSection title="Feedback" description="Components for user feedback">
              <ComponentExample name="Alert" description="Alert messages">
                <div className="space-y-4 max-w-md">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Info</AlertTitle>
                    <AlertDescription>This is an informational alert.</AlertDescription>
                  </Alert>
                </div>
              </ComponentExample>

              <ComponentExample name="Skeleton" description="Loading placeholder">
                <div className="space-y-2 w-[300px]">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </ComponentExample>

              <ComponentExample name="Progress" description="Progress indicator">
                <div className="w-[300px] space-y-2">
                  <Progress value={33} />
                  <Progress value={66} />
                  <Progress value={100} />
                </div>
              </ComponentExample>
            </ComponentSection>

            <ComponentSection title="Overlay" description="Overlay and popup components">
              <ComponentExample name="Dialog" description="Modal dialog">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog Title</DialogTitle>
                      <DialogDescription>
                        This is a dialog description.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p>Dialog content goes here.</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </ComponentExample>
            </ComponentSection>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </ThemeWrapper>
  )
}

