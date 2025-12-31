"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Calendar } from "@/components/ui/calendar"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { 
  Search, 
  Home, 
  User, 
  Settings, 
  Mail, 
  Bell, 
  ChevronDown,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Calendar as CalendarIcon,
  Menu,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"

// Import custom components for showcase
import { AboutSection } from "@/components/about-section"
import { ContactForm } from "@/components/contact-form"
import { DualHeroSection } from "@/components/dual-hero-section"
import { EducationHighlights } from "@/components/education-highlights"
import { PartnersSection } from "@/components/partners-section"
import { ConsultancySection } from "@/components/consultancy-section"
import { EngineeringProjects } from "@/components/engineering-projects"

export default function ComponentsShowcasePage() {
  const [mode, setMode] = useState<"education" | "engineering">("education")
  const [searchQuery, setSearchQuery] = useState("")
  const { toast } = useToast()

  const uiComponents = [
    { name: "Button", category: "Actions" },
    { name: "Badge", category: "Data Display" },
    { name: "Input", category: "Forms" },
    { name: "Textarea", category: "Forms" },
    { name: "Label", category: "Forms" },
    { name: "Checkbox", category: "Forms" },
    { name: "Switch", category: "Forms" },
    { name: "Radio Group", category: "Forms" },
    { name: "Select", category: "Forms" },
    { name: "Slider", category: "Forms" },
    { name: "Card", category: "Layout" },
    { name: "Separator", category: "Layout" },
    { name: "Alert", category: "Feedback" },
    { name: "Avatar", category: "Data Display" },
    { name: "Accordion", category: "Layout" },
    { name: "Dialog", category: "Overlay" },
    { name: "Dropdown Menu", category: "Overlay" },
    { name: "Popover", category: "Overlay" },
    { name: "Tooltip", category: "Overlay" },
    { name: "Alert Dialog", category: "Overlay" },
    { name: "Skeleton", category: "Feedback" },
    { name: "Table", category: "Data Display" },
    { name: "Toggle", category: "Actions" },
    { name: "Toggle Group", category: "Actions" },
    { name: "Calendar", category: "Forms" },
    { name: "Pagination", category: "Navigation" },
    { name: "Breadcrumb", category: "Navigation" },
    { name: "Command", category: "Overlay" },
    { name: "Sheet", category: "Overlay" },
    { name: "Collapsible", category: "Layout" },
    { name: "Menubar", category: "Navigation" },
    { name: "Hover Card", category: "Overlay" },
    { name: "Context Menu", category: "Overlay" },
    { name: "Progress", category: "Feedback" },
    { name: "Tabs", category: "Navigation" },
  ]

  const customComponents = [
    { name: "Navbar", category: "Layout" },
    { name: "Footer", category: "Layout" },
    { name: "About Section", category: "Sections" },
    { name: "Contact Form", category: "Forms" },
    { name: "Dual Hero Section", category: "Sections" },
    { name: "Education Highlights", category: "Sections" },
    { name: "Partners Section", category: "Sections" },
    { name: "Consultancy Section", category: "Sections" },
    { name: "Engineering Projects", category: "Sections" },
  ]

  const filteredUIComponents = uiComponents.filter(comp => 
    comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredCustomComponents = customComponents.filter(comp => 
    comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className={mode === "engineering" ? "dark" : ""}>
      <Navbar mode={mode} setMode={setMode} />
      <main className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Component Showcase</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Browse and preview all available components and modules in the ProxiTech design system.
            </p>
            
            {/* Search */}
            <div className="max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search components..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <Tabs defaultValue="ui" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="ui">UI Components ({uiComponents.length})</TabsTrigger>
              <TabsTrigger value="custom">Custom Components ({customComponents.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="ui" className="space-y-12">
              {/* Actions */}
              <ComponentSection title="Actions" description="Interactive elements for user actions">
                <ComponentExample name="Button" description="Various button variants and sizes">
                  <div className="flex flex-wrap gap-4">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="purple-solid">Purple Solid</Button>
                    <Button variant="purple-outline">Purple Outline</Button>
                    <Button variant="purple-ghost">Purple Ghost</Button>
                    <Button size="sm">Small</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon"><User /></Button>
                  </div>
                </ComponentExample>

                <ComponentExample name="Toggle" description="Toggle button component">
                  <div className="flex gap-4">
                    <Toggle aria-label="Toggle italic">
                      <Settings />
                    </Toggle>
                    <Toggle aria-label="Toggle bold" pressed>
                      <Settings />
                    </Toggle>
                  </div>
                </ComponentExample>

                <ComponentExample name="Toggle Group" description="Group of toggle buttons">
                  <ToggleGroup type="single">
                    <ToggleGroupItem value="left" aria-label="Left aligned">
                      <Settings />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="center" aria-label="Center aligned">
                      <Settings />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="right" aria-label="Right aligned">
                      <Settings />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </ComponentExample>
              </ComponentSection>

              {/* Forms */}
              <ComponentSection title="Forms" description="Form input components">
                <ComponentExample name="Input" description="Text input field">
                  <div className="space-y-4 max-w-md">
                    <Input placeholder="Enter text..." />
                    <Input type="email" placeholder="Email address" />
                    <Input type="password" placeholder="Password" />
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

                <ComponentExample name="Slider" description="Range slider">
                  <div className="w-[300px]">
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                </ComponentExample>

                <ComponentExample name="Calendar" description="Date picker calendar">
                  <Calendar mode="single" className="rounded-md border" />
                </ComponentExample>
              </ComponentSection>

              {/* Data Display */}
              <ComponentSection title="Data Display" description="Components for displaying data">
                <ComponentExample name="Badge" description="Status badges and labels">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
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

              {/* Layout */}
              <ComponentSection title="Layout" description="Layout and container components">
                <ComponentExample name="Card" description="Card container">
                  <Card className="w-[350px]">
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card description goes here</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Card content area</p>
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

                <ComponentExample name="Collapsible" description="Collapsible content area">
                  <Collapsible className="w-[350px] space-y-2">
                    <CollapsibleTrigger asChild>
                      <Button variant="outline">Toggle</Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2">
                      <div className="rounded-md border px-4 py-2">
                        Content that can be collapsed
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </ComponentExample>
              </ComponentSection>

              {/* Feedback */}
              <ComponentSection title="Feedback" description="Components for user feedback">
                <ComponentExample name="Alert" description="Alert messages">
                  <div className="space-y-4 max-w-md">
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>Info</AlertTitle>
                      <AlertDescription>This is an informational alert.</AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>This is an error alert.</AlertDescription>
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

              {/* Overlay */}
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

                <ComponentExample name="Alert Dialog" description="Confirmation dialog">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">Delete</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </ComponentExample>

                <ComponentExample name="Dropdown Menu" description="Dropdown menu">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Open Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </ComponentExample>

                <ComponentExample name="Popover" description="Popover tooltip">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">Open Popover</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="space-y-2">
                        <h4 className="font-medium">Popover Title</h4>
                        <p className="text-sm text-muted-foreground">
                          Popover content goes here.
                        </p>
                      </div>
                    </PopoverContent>
                  </Popover>
                </ComponentExample>

                <ComponentExample name="Tooltip" description="Tooltip">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Hover me</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>This is a tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </ComponentExample>

                <ComponentExample name="Sheet" description="Slide-out panel">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">Open Sheet</Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Sheet Title</SheetTitle>
                        <SheetDescription>
                          Sheet description goes here.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="py-4">
                        <p>Sheet content goes here.</p>
                      </div>
                    </SheetContent>
                  </Sheet>
                </ComponentExample>

                <ComponentExample name="Command" description="Command palette">
                  <Command className="rounded-lg border shadow-md max-w-md">
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Suggestions">
                        <CommandItem>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </ComponentExample>

                <ComponentExample name="Hover Card" description="Hover card">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="link">@username</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">@username</h4>
                          <p className="text-sm">
                            Hover card content goes here.
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </ComponentExample>

                <ComponentExample name="Context Menu" description="Right-click menu">
                  <ContextMenu>
                    <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                      Right click here
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                      <ContextMenuItem>Back</ContextMenuItem>
                      <ContextMenuItem>Forward</ContextMenuItem>
                      <ContextMenuItem>Reload</ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                </ComponentExample>
              </ComponentSection>

              {/* Navigation */}
              <ComponentSection title="Navigation" description="Navigation components">
                <ComponentExample name="Tabs" description="Tab navigation">
                  <Tabs defaultValue="tab1" className="w-[400px]">
                    <TabsList>
                      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                      <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1" className="mt-4">
                      Content for tab 1
                    </TabsContent>
                    <TabsContent value="tab2" className="mt-4">
                      Content for tab 2
                    </TabsContent>
                    <TabsContent value="tab3" className="mt-4">
                      Content for tab 3
                    </TabsContent>
                  </Tabs>
                </ComponentExample>

                <ComponentExample name="Breadcrumb" description="Breadcrumb navigation">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Components</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Showcase</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </ComponentExample>

                <ComponentExample name="Pagination" description="Page navigation">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </ComponentExample>

                <ComponentExample name="Menubar" description="Menu bar">
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger>File</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>New</MenubarItem>
                        <MenubarItem>Open</MenubarItem>
                        <MenubarItem>Save</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                      <MenubarTrigger>Edit</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>Undo</MenubarItem>
                        <MenubarItem>Redo</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </ComponentExample>
              </ComponentSection>
            </TabsContent>

            <TabsContent value="custom" className="space-y-12">
              <ComponentSection title="Layout Components" description="Site-wide layout components">
                <ComponentExample name="Navbar" description="Main navigation bar">
                  <div className="border rounded-lg p-4 bg-background">
                    <p className="text-sm text-muted-foreground mb-4">
                      The navbar is already displayed at the top of this page. It includes responsive mobile menu, dropdowns, and theme switching.
                    </p>
                    <div className="flex items-center gap-4 p-4 border rounded">
                      <div className="h-10 w-10 bg-muted rounded"></div>
                      <div className="flex gap-4">
                        <Button variant="ghost" size="sm">Home</Button>
                        <Button variant="ghost" size="sm">Education</Button>
                        <Button variant="ghost" size="sm">Engineering</Button>
                      </div>
                    </div>
                  </div>
                </ComponentExample>

                <ComponentExample name="Footer" description="Site footer">
                  <div className="border rounded-lg p-4 bg-background">
                    <p className="text-sm text-muted-foreground mb-4">
                      The footer is displayed at the bottom of this page. It includes links, social media, and copyright information.
                    </p>
                    <div className="p-4 border rounded bg-muted/50">
                      <p className="text-sm">Footer content with links and social media</p>
                    </div>
                  </div>
                </ComponentExample>
              </ComponentSection>

              <ComponentSection title="Section Components" description="Reusable page sections">
                <ComponentExample name="About Section" description="About section component">
                  <div className="border rounded-lg p-4 bg-background">
                    <p className="text-sm text-muted-foreground mb-4">
                      Full component preview (may require specific props):
                    </p>
                    <div className="border rounded p-8 bg-muted/30">
                      <AboutSection mode={mode} />
                    </div>
                  </div>
                </ComponentExample>

                <ComponentExample name="Dual Hero Section" description="Hero section with mode switching">
                  <div className="border rounded-lg p-4 bg-background">
                    <p className="text-sm text-muted-foreground mb-4">
                      Hero section with dual mode (education/engineering) switching:
                    </p>
                    <div className="border rounded p-8 bg-muted/30">
                      <DualHeroSection mode={mode} setMode={setMode} />
                    </div>
                  </div>
                </ComponentExample>

                <ComponentExample name="Education Highlights" description="Education section highlights">
                  <div className="border rounded-lg p-4 bg-background">
                    <p className="text-sm text-muted-foreground mb-4">
                      Education highlights component:
                    </p>
                    <div className="border rounded p-8 bg-muted/30">
                      <EducationHighlights />
                    </div>
                  </div>
                </ComponentExample>

                <ComponentExample name="Partners Section" description="Partners showcase">
                  <div className="border rounded-lg p-4 bg-background">
                    <p className="text-sm text-muted-foreground mb-4">
                      Partners section component:
                    </p>
                    <div className="border rounded p-8 bg-muted/30">
                      <PartnersSection />
                    </div>
                  </div>
                </ComponentExample>

                <ComponentExample name="Consultancy Section" description="Consultancy services">
                  <div className="border rounded-lg p-4 bg-background">
                    <p className="text-sm text-muted-foreground mb-4">
                      Consultancy section component:
                    </p>
                    <div className="border rounded p-8 bg-muted/30">
                      <ConsultancySection />
                    </div>
                  </div>
                </ComponentExample>

                <ComponentExample name="Engineering Projects" description="Engineering projects showcase">
                  <div className="border rounded-lg p-4 bg-background">
                    <p className="text-sm text-muted-foreground mb-4">
                      Engineering projects component:
                    </p>
                    <div className="border rounded p-8 bg-muted/30">
                      <EngineeringProjects />
                    </div>
                  </div>
                </ComponentExample>
              </ComponentSection>

              <ComponentSection title="Form Components" description="Custom form components">
                <ComponentExample name="Contact Form" description="Contact form with validation">
                  <div className="border rounded-lg p-4 bg-background">
                    <p className="text-sm text-muted-foreground mb-4">
                      Contact form component:
                    </p>
                    <div className="border rounded p-8 bg-muted/30">
                      <ContactForm mode={mode} />
                    </div>
                  </div>
                </ComponentExample>
              </ComponentSection>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer mode={mode} />
      <Toaster />
    </div>
  )
}

function ComponentSection({ 
  title, 
  description, 
  children 
}: { 
  title: string
  description: string
  children: React.ReactNode 
}) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-8">
        {children}
      </div>
    </section>
  )
}

function ComponentExample({ 
  name, 
  description, 
  children 
}: { 
  name: string
  description: string
  children: React.ReactNode 
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="p-6 bg-muted/30 rounded-lg border border-dashed">
          {children}
        </div>
      </CardContent>
    </Card>
  )
}

