import { motion } from 'framer-motion';
import { categorizedSkills } from '@/lib/data';
import { SkillCard } from './SkillCard';

export function SkillsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies across various domains
            of software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <SkillCard key={category} title={category} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  );
}
