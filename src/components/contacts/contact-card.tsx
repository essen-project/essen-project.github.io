import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

function ContactCard(
  props: React.ComponentPropsWithoutRef<typeof Card> & {
    thumbnail?: string;
    title: string;
    content: string;
  }
) {
  return (
    <Card {...props}>
      <CardHeader className={cn("flex flex-col gap-y-2")}>
                <CardTitle>{props.title}</CardTitle>
        <CardDescription>
          {props.content.length! > 100 ? (
            <>{props?.content?.slice(0, 100)}...</>
          ) : (
            <>{props.content}</>
          )}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild>
          <Link href="#">Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ContactCard;