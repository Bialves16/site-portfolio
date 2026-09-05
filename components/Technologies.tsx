"use client";

import { motion } from "framer-motion";
import { techGroups, tools } from "@/data/technologies";
import ToolIcon from "./ToolIcon";

export default function Technologies() {
  return (
    <div>
      <h2 className="font-mono text-xs tracking-[0.22em] text-accent">
        TECNOLOGIAS
      </h2>

      <div className="mt-7 grid grid-cols-3 gap-4 sm:gap-6">
        {techGroups.map((group) => (
          <div key={group.title}>
            <h3 className="font-mono text-[10px] tracking-[0.18em] text-accent/90">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-mono text-[11px] text-text-muted sm:text-xs"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <motion.div
        className="mt-10 border border-border bg-bg-elevated/80 px-4 py-3 sm:px-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
          <span className="font-mono text-[10px] tracking-[0.2em] text-text-dim">
            FERRAMENTAS
          </span>
          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
            {tools.map((tool) => (
              <ToolIcon key={tool.name} tool={tool} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
