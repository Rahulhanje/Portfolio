import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Code2, Database, Globe, Server, Settings, Terminal } from 'lucide-react';

interface SkillCardProps {
  title: string;
  skills: string[];
}

const iconMap: { [key: string]: ReactNode } = {
  Languages: <Terminal className="w-6 h-6" />,
  "Frontend Technologies": <Globe className="w-6 h-6" />,
  "Backend Technologies": <Server className="w-6 h-6" />,
  "Databases & ORM": <Database className="w-6 h-6" />,
  "DevOps & Tools": <Settings className="w-6 h-6" />,
  "Other Tools & Skills": <Code2 className="w-6 h-6" />,
};

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-indigo-600 dark:text-indigo-400">
          {iconMap[title] || <Code2 className="w-6 h-6" />}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full cursor-pointer transition-colors hover:bg-indigo-200 dark:hover:bg-indigo-900/50"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
