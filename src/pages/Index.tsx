
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-gray-100 rounded-full text-gray-700">
            Welcome
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Create Something Beautiful
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover the perfect balance of form and function, crafted with precision and care.
          </p>
          <Button
            className="hover-scale bg-black text-white hover:bg-gray-900"
            size="lg"
          >
            Get Started
          </Button>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 glass hover-scale h-full">
                <div className="text-2xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass inline-block px-6 py-3 rounded-2xl">
            <p className="text-lg text-gray-700 mb-4">
              Ready to transform your vision into reality?
            </p>
            <Button
              variant="outline"
              className="hover-scale border-2"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: "✨",
    title: "Elegant Design",
    description: "Carefully crafted interfaces that blend beauty with functionality.",
  },
  {
    icon: "🎯",
    title: "Precision",
    description: "Every detail meticulously refined for the perfect user experience.",
  },
  {
    icon: "💫",
    title: "Innovation",
    description: "Pushing boundaries while maintaining simplicity and usability.",
  },
];

export default Index;
