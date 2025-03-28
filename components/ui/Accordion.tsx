import { Icon } from '@iconify/react/dist/iconify.js';
import { cn } from '../libs/utils';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import React, { useId } from 'react';

function Accordion({ children, className, ...props }:{children:React.ReactNode;className?:string} & React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>) {
	return (
		<AccordionPrimitive.Root
			className={cn(
				'w-full overflow-hidden relative transition-all flex flex-col gap-2',
				className
			)}
			{...props}
		>
			{children}
		</AccordionPrimitive.Root>
	);
};
function AccordionItem ({ children, className, value, ...props }:{children:React.ReactNode;className?:string;value:string} & React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>) {
		const _id = useId();
		const _value = value ?? _id;
		return (
			<AccordionPrimitive.Item
				className={cn(
					'border rounded-xl shadow-sm overflow-hidden bg-secondary/30 border-accent/30',
					className
				)}
				value={_value}
				{...props}
			>
				{children}
			</AccordionPrimitive.Item>
		);
}

function AccordionTrigger({ children, className, ...props }:{children:React.ReactNode;className?:string} & React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) {
	return (
		<AccordionPrimitive.Header className="flex !p-0 !m-0">
			<AccordionPrimitive.Trigger
				className={cn(
					'relative z-[2] flex justify-between text-start items-center py-5 px-6 w-full group',
					'data-[state=closed]:hover:bg-muted/15 transition-colors',
					className
				)}
				{...props}
			>
				<span className='font-semibold max-w-xs md:max-w-md lg:max-w-lg'>{children}</span>
				<div className='group-data-[state=open]:rotate-180 transition duration-300'><Icon icon={"solar:alt-arrow-down-outline"} /></div>
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

function AccordionContent ({ children, className, ...props }:{children:React.ReactNode;className?:string} & React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) {
	return (
		<AccordionPrimitive.Content
			className={cn(
				className,
				'relative z-[1] data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp'
			)}
			{...props}
		>
			<div className="px-6 pb-6 text-sm text-muted">{children}</div>
		</AccordionPrimitive.Content>
	);
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };