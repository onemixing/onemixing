'use client'
import * as React from "react"
import { useState } from 'react'
import { Button } from "../../components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "../../components/ui/card";
import Image from "next/image";
import { Badge } from "../../components/ui/badge"
import Link from "next/link";
const audioPlugins = [
  {
    name: "boogieFive",
    description: "Famous Mesa Boogie Five-Band Graphic EQ",
    imageUrl: "/img/boogieFive/bf.png",
    category: "EQ",
    goToLink: "products/boogieFive"
  }
]

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Plugins by <span className="dosis-font">one<span className="font-thin">mixing</span></span></h1>
        <p className="text-xl text-gray-300">audio mixing tools from mixers to mixers</p>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audioPlugins.map((plugin, index) => (
            <Card 
            className="overflow-hidden transition-all duration-300 transform hover:scale-105"
           key={index}>
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={plugin.imageUrl}
                  alt={plugin.name}
                  layout="fill"
                  objectFit="cover"
                />
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                  {plugin.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-2xl mb-2">{plugin.name}</CardTitle>
              <CardDescription>{plugin.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-4">
              <Link href={plugin.goToLink} className="w-full"><Button className="w-full">Download now</Button></Link>
            </CardFooter>
          </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

