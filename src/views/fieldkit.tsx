"use client"

import { motion } from "framer-motion";
import { Button } from "@/component/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/component/ui/form";
import { Input } from "@/component/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/component/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";
import { Send } from "lucide-react";import { apiRequest } from "@/lib/queryClient";
import { toast } from "@/component/hooks/use-toast";
import { generateFiedlKitTemplate } from "@/app/templates/fieldkit";

const formSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  companyRep: z.string().min(1, "Company representative is required"),
  email: z.string().email("Please enter a valid email address"),
  fieldKitsNeeded: z.string().min(1, "Please select number of field kits needed")
});

function FieldkitInterestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      companyRep: "",
      email: "",
      fieldKitsNeeded: ""
    }
  });

   const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);

      const payload = {
        template: generateFiedlKitTemplate(data),
        text: "Mac Safety",
        subject: "FieldKit",
      };

      const resp = await apiRequest("POST", "/api/send", payload);

      console.log({ resp: await resp.json() });

      toast({
        title: "Field kit Submitted",
        description: "Downloading the Whitepaper",
      });

      const elem = document.getElementById("downloadWhitePaper");
      elem?.click();

      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.log({ error });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = "bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#eba200] focus:ring-[#eba200]";
  const labelStyles = "text-gray-300 font-alliance";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelStyles}>Company Name</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  className={inputStyles}
                  data-testid="input-company-name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="companyRep"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelStyles}>Company Representative</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  className={inputStyles}
                  data-testid="input-company-rep"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelStyles}>Email</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  type="email"
                  className={inputStyles}
                  data-testid="input-email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="fieldKitsNeeded"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelStyles}>Number of Field Kits Needed</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className={inputStyles} data-testid="select-fieldkits">
                    <SelectValue placeholder="Select quantity" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="1-5" className="text-white hover:bg-gray-700">1 - 5</SelectItem>
                  <SelectItem value="5-20" className="text-white hover:bg-gray-700">5 - 20</SelectItem>
                  <SelectItem value="20+" className="text-white hover:bg-gray-700">20 or more</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button
          type="submit"
          className="w-full bg-[#eba200] hover:bg-[#d49400] text-black font-semibold py-6 rounded-full font-alliance"
          disabled={isSubmitting}
          data-testid="button-submit"
        >
          {isSubmitting ? "Submitting..." : (
            <span className="flex items-center justify-center gap-2">
              Submit Request <Send className="w-4 h-4" />
            </span>
          )}
        </Button>
      </form>
    </Form>
  );
}

function TypingAnimation() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "FIELDKIT";
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 150;
    const pauseTime = isDeleting ? 1000 : 2000;
    
    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < fullText.length) {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(fullText.slice(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, fullText]);

  return (
    <span className="relative">
      {displayText}
      <span className="animate-pulse text-[#eba200]">|</span>
    </span>
  );
}

export default function Fieldkit() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Light */}
      <section className="pt-32 bg-[#0b0b0d]">
        <div className="container mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 lg:mb-0"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-alliance font-bold text-white leading-[0.9] min-h-[1.1em]">
                <TypingAnimation />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 lg:pt-4"
            >
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-alliance">
                Delivering AI directly to the field
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#eba200] hover:bg-[#d49400] text-black font-semibold px-8 py-3 rounded-full font-alliance" data-testid="button-whitepaper">
                  Download Whitepaper
                </Button>
                <Button variant="outline" className="border-2 border-[#eba200] text-[#eba200] hover:bg-[#eba200]/10 px-8 py-3 rounded-full font-alliance" data-testid="button-learn-more">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full"
          >
            <div className="w-full h-80 md:h-[500px] lg:h-[600px] xl:h-[700px]">
              <img 
                src="/fieldkit-hero.png" 
                alt="MAC FIELDKIT Device" 
                className="w-full h-full object-contain object-center"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Information Section - Dark */}
      <section className="py-20 md:py-28 bg-[#0b0b0d]">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center mb-12">
                <p className="text-[#eba200] text-sm uppercase tracking-widest mb-4 font-alliance">
                  Edge Intelligence Platform
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-alliance font-bold text-white mb-6">
                  A fully disconnected intelligence center. Powered by MAC.
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto font-alliance">
                  The MAC FIELDKIT puts intelligence where work happens, not where Wi-Fi is. Teams plan, execute, and capture proof under low-power, low-bandwidth, or no-signal conditions with secure store-and-forward sync.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-gray-800 border border-gray-700 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-2 font-alliance">POWER</h3>
                    <p className="text-[#eba200] text-sm mb-4 font-alliance">~768 Wh LFP • 800 W AC</p>
                    <div className="text-gray-400 text-sm space-y-2 font-alliance">
                      <p>Usable energy ≈ 768 Wh; LiFePO₄ (≈3000+ cycles)</p>
                      <p>Outputs: AC pure-sine, USB-C PD (≤100 W), 12–13 V DC</p>
                      <p>Pass-through charging and full BMS protections</p>
                      <p>Runtime chips: Offline ~9.1 h, Sat idle ~7.2 h, Sat active ~4.3 h</p>
                    </div>
                  </div>

                  <div className="bg-gray-800 border border-gray-700 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-2 font-alliance">CONNECTIVITY</h3>
                    <p className="text-[#eba200] text-sm mb-4 font-alliance">LEO backhaul • ~100/10 Mbps</p>
                    <div className="text-gray-400 text-sm space-y-2 font-alliance">
                      <p>Typical latency ~20–50 ms, store-and-forward on link loss</p>
                      <p>Power draw ~15–40 W (idle→active)</p>
                      <p>Integrated AP/router + Ethernet hand-off; multipath failover (LTE/5G/PTP/LAN)</p>
                    </div>
                  </div>

                  <div className="bg-gray-800 border border-gray-700 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-2 font-alliance">DISPLAYS</h3>
                    <p className="text-[#eba200] text-sm mb-4 font-alliance">Dual 15.6″ OLED • ~300 nit</p>
                    <div className="text-gray-400 text-sm space-y-2 font-alliance">
                      <p>USB-C (DP Alt-Mode), ~8–12 W each at work brightness</p>
                      <p>Anti-glare protector option; lid-integrated mounting</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-800 border border-gray-700 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-2 font-alliance">I/O & ORCHESTRATION</h3>
                    <p className="text-[#eba200] text-sm mb-4 font-alliance">TB4/USB4 • 40 Gb/s</p>
                    <div className="text-gray-400 text-sm space-y-2 font-alliance">
                      <p>Up to ~98 W host PD, ~18-port class with 2.5 GbE</p>
                      <p>DisplayPort 1.4, high-speed USB-A/C, UHS-II SD</p>
                      <p>One-cable host attach; camera/sensor chain friendly</p>
                    </div>
                  </div>

                  <div className="bg-gray-800 border border-gray-700 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-2 font-alliance">EDGE OPS BEHAVIOR</h3>
                    <p className="text-[#eba200] text-sm mb-4 font-alliance">Offline-first • On-box inference</p>
                    <div className="text-gray-400 text-sm space-y-2 font-alliance">
                      <p>Local models + services keep the control loop running with zero backhaul</p>
                      <p>Conflict-aware sync on link return; hashed object provenance</p>
                      <p>Security: full-disk encryption, WPA2/3, optional IPsec/WireGuard</p>
                    </div>
                  </div>

                  <div className="bg-gray-800 border border-gray-700 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-2 font-alliance">QUICK SELECT</h3>
                    <p className="text-[#eba200] text-sm mb-4 font-alliance">4–9 h runtime • Sub-50 ms class</p>
                    <div className="text-gray-400 text-sm space-y-2 font-alliance">
                      <p>Power: ~768 Wh LFP / 800 W AC; PD 100 W</p>
                      <p>Connectivity: LEO ~100/10 Mbps; ~15–40 W draw</p>
                      <p>Workfaces: dual 15.6″ OLED (~300 nit)</p>
                      <p>I/O: TB4, 2.5 GbE, high-port dock class</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {["POWER", "CONNECTION", "MULTIDISPLAY", "PORTABLE", "CHARGING", "COMPUTE", "INTEROPERABLE", "MIL-SPEC"].map((feature) => (
                  <span key={feature} className="px-4 py-2 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700 font-alliance">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Defining Section - Light */}
      <section className="py-20 md:py-28 bg-[#16171a]">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center mb-16">
                <p className="text-[#eba200] text-sm uppercase tracking-widest mb-4 font-alliance">
                  Competitive Advantage
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-alliance font-bold text-white mb-6">
                  Industry Defining
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-alliance">
                  FIELDKIT brings AI to the field physically in this revolutionary form factor, redefining what&apos;s possible for edge intelligence operations.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="text-center p-6 bg-[#1f2024] rounded-2xl border border-gray-800">
                    <h3 className="text-2xl font-bold text-[#eba200] mb-2 font-alliance">FIELDKIT</h3>
                    <p className="text-gray-500 text-sm font-alliance">Next-Generation Edge Intelligence</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-[#1f2024] border border-gray-800 p-6 rounded-2xl">
                      <h4 className="text-white font-semibold mb-2 font-alliance">Mobility</h4>
                      <p className="text-gray-400 text-sm font-alliance">Vehicle tie-down mobility for rapid deployment</p>
                    </div>
                    
                    <div className="bg-[#1f2024] border border-gray-800 p-6 rounded-2xl">
                      <h4 className="text-white font-semibold mb-2 font-alliance">Power</h4>
                      <p className="text-gray-400 text-sm font-alliance">~768 Wh LFP / 800 W AC with extended runtime</p>
                    </div>
                    
                    <div className="bg-[#1f2024] border border-gray-800 p-6 rounded-2xl">
                      <h4 className="text-white font-semibold mb-2 font-alliance">Operation</h4>
                      <p className="text-gray-400 text-sm font-alliance">Offline-first architecture for zero-dependency ops</p>
                    </div>
                    
                    <div className="bg-[#1f2024] border border-gray-800 p-6 rounded-2xl">
                      <h4 className="text-white font-semibold mb-2 font-alliance">Connectivity</h4>
                      <p className="text-gray-400 text-sm font-alliance">LEO backhaul (~100/10 Mbps class, sub-50 ms typical)</p>
                    </div>
                    
                    <div className="bg-[#1f2024] border border-gray-800 p-6 rounded-2xl">
                      <h4 className="text-white font-semibold mb-2 font-alliance">Interface</h4>
                      <p className="text-gray-400 text-sm font-alliance">Dual 15.6″ OLED workfaces for immersive ops</p>
                    </div>
                    
                    <div className="bg-[#1f2024] border border-gray-800 p-6 rounded-2xl">
                      <h4 className="text-white font-semibold mb-2 font-alliance">I/O</h4>
                      <p className="text-gray-400 text-sm font-alliance">TB4 fabric with high-speed interconnects</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="text-center p-6 bg-gray-100 rounded-2xl border border-gray-800">
                    <h3 className="text-2xl font-bold text-gray-400 mb-2 font-alliance">Legacy Cabinet</h3>
                    <p className="text-gray-400 text-sm font-alliance">Traditional Fixed Installation</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-100 border border-gray-800 p-6 rounded-2xl">
                      <h4 className="text-gray-500 font-semibold mb-2 font-alliance">Mobility</h4>
                      <p className="text-gray-400 text-sm font-alliance">Casters/crane lift for limited repositioning</p>
                    </div>
                    
                    <div className="bg-gray-100 border border-gray-800 p-6 rounded-2xl">
                      <h4 className="text-gray-500 font-semibold mb-2 font-alliance">Enclosure</h4>
                      <p className="text-gray-400 text-sm font-alliance">Large 16-ga steel ~55″×30″×75″, heavy (~700+ lb class)</p>
                    </div>
                    
                    <div className="bg-gray-100 border border-gray-800 p-6 rounded-2xl">
                      <h4 className="text-gray-500 font-semibold mb-2 font-alliance">Power</h4>
                      <p className="text-gray-400 text-sm font-alliance">Shore-power with small UPS (≈30 min backup)</p>
                    </div>
                    
                    <div className="bg-gray-100 border border-gray-800 p-6 rounded-2xl">
                      <h4 className="text-gray-500 font-semibold mb-2 font-alliance">Installation</h4>
                      <p className="text-gray-400 text-sm font-alliance">Door-frame fit requirements for deployment</p>
                    </div>
                    
                    <div className="bg-gray-100 border border-gray-800 p-6 rounded-2xl">
                      <h4 className="text-gray-500 font-semibold mb-2 font-alliance">Interface</h4>
                      <p className="text-gray-400 text-sm font-alliance">Integrated TV/laser printer setup</p>
                    </div>
                    
                    <div className="bg-gray-100 border border-gray-800 p-6 rounded-2xl">
                      <h4 className="text-gray-500 font-semibold mb-2 font-alliance">Connectivity</h4>
                      <p className="text-gray-400 text-sm font-alliance">Traditional network infrastructure dependency</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-8">
                <p className="text-gray-400 text-sm font-alliance">
                  Runtimes are scenario-dependent; &apos;legacy cabinet&apos; specs summarized from public datasheets.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Started Section - Dark */}
      <section className="py-20 md:py-28 bg-[#0b0b0d]">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="text-[#eba200] text-sm uppercase tracking-widest mb-4 font-alliance">
                Get In Touch
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-alliance">
                Get Started Today
              </h2>
              <p className="text-gray-400 font-alliance">
                Request information about FIELDKIT for your organization
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8 md:p-12">
              <FieldkitInterestForm />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
