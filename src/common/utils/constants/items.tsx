import {nanoid} from "@reduxjs/toolkit";
import {FC} from "react";
import {Display, OperationsBlock, DigitalBlock, Equals} from "common/components";
import {ItemNameType} from "app/appSlice";

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
  Component: FC<{
    inactive?: boolean,
    inputValue?: string,
    setValue?: (title: string) => void,
    setResult?: (title: string) => void,
    saveOperation?: (title: string) => void
  }>
}