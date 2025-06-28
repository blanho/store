import { NO_ITEMS_FOUND } from '@/constants/message'
import { cn } from '@/lib/utils'
import React from 'react'

const EmptyList = ({ heading = NO_ITEMS_FOUND, className }: { heading?: string, className?: string }) => {
    return (
        <h2 className={cn('text-xl', className)}>
            {heading}
        </h2>
    )
}

export default EmptyList