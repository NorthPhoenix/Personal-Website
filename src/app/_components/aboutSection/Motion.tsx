/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { type ComponentPropsWithoutRef, type ElementRef } from "react"
import { motion, type ForwardRefComponent } from "framer-motion"

// internal types from framer-motion that are not exported
type UnionStringArray<T extends Readonly<string[]>> = T[number]
declare const htmlElements: readonly [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "webview",
]
type HTMLElement = UnionStringArray<typeof htmlElements>

type MotionProps<TTag extends HTMLElement = "div"> = ComponentPropsWithoutRef<
  (typeof motion)["div"] extends ForwardRefComponent<any, any> ?
    (typeof motion)["div"]
  : never
> & {
  as?: TTag
}

function Motion<TTag extends HTMLElement>({
  children,
  as,
  ...props
}: MotionProps<TTag>) {
  const Component = motion[as ?? "div"] as ForwardRefComponent<
    ElementRef<TTag>,
    MotionProps<TTag>
  >
  return <Component {...props}>{children}</Component>
}

export default Motion
