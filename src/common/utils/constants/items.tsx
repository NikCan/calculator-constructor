import {nanoid} from "@reduxjs/toolkit";
import {Display} from "common/components/display/Display";
import {OperationsBlock} from "common/components/operations-block/OperationsBlock";
import {DigitalBlock} from "common/components/digital-block/DigitalBlock";
import {Equals} from "common/components/equals/Equals";
import {FC} from "react";

export const items: ItemType[] = [
  {
    id: nanoid(),
    name: 'display',
    Component: Display
  },
  {
    id: nanoid(),
    name: 'operations',
    Component: OperationsBlock
  },
  {
    id: nanoid(),
    name: 'digital',
    Component: DigitalBlock
  },
  {
    id: nanoid(),
    name: 'equals',
    Component: Equals
  },
]

export type ItemType = {
  id: string
  name: ItemNameType
  Component: FC<{ inactive?: boolean }>
}

export type ItemNameType = 'display' | 'operations' | 'digital' | 'equals'
