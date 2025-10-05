"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn("overflow-hidden rounded-md transition-colors duration-300", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "w-full h-20 px-6 py-4 flex items-center justify-between font-semibold text-2xl transition-colors duration-300 cursor-pointer border",
          "data-[state=open]:bg-amber-900 data-[state=open]:border-amber-900 data-[state=open]:text-white",
          "data-[state=closed]:bg-white data-[state=closed]:text-gray-900 hover:data-[state=closed]:text-amber-900",
          className
        )}
        {...props}
      >
        {children}
        <svg
          className="w-7 h-8 transition-transform duration-300 text-gray-500 data-[state=open]:rotate-180 data-[state=open]:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          <path
            className="data-[state=open]:hidden"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v12"
          />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "overflow-hidden text-md leading-relaxed transition-all duration-300 data-[state=open]:max-h-40 data-[state=closed]:max-h-0",
        className
      )}
      {...props}
    >
      <div className="px-6 pb-4 data-[state=open]:text-white data-[state=closed]:text-gray-600">
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
export default Accordion