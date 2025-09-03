"use client";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/component/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/component/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";
import { Input } from "@/component/ui/input";
import { Button } from "@/component/ui/button";
import { useToast } from "@/component/hooks/use-toast";
import { generateFiedlKitTemplate } from "@/app/templates/fieldkit";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  companyRep: z.string().min(1, "Company representative is required"),
  email: z.string().email("Please enter a valid email address"),
  fieldKitsNeeded: z
    .string()
    .min(1, "Please select number of field kits needed"),
});

function FieldkitInterestForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      companyRep: "",
      email: "",
      fieldKitsNeeded: "",
    },
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white text-sm uppercase tracking-wide">
                COMPANY NAME:
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-transparent border-0 border-b-2 border-white text-white focus:border-[#eba200] focus:ring-0 rounded-none px-0 py-2"
                  placeholder=""
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
              <FormLabel className="text-white text-sm uppercase tracking-wide">
                COMPANY REPRESENTATIVE:
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-transparent border-0 border-b-2 border-white text-white focus:border-[#eba200] focus:ring-0 rounded-none px-0 py-2"
                  placeholder=""
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
              <FormLabel className="text-white text-sm uppercase tracking-wide">
                EMAIL:
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="bg-transparent border-0 border-b-2 border-white text-white focus:border-[#eba200] focus:ring-0 rounded-none px-0 py-2"
                  placeholder=""
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
              <FormLabel className="text-white text-sm uppercase tracking-wide">
                NUMBER OF FIELD KITS NEEDED:
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-transparent border-0 border-b-2 border-white text-white focus:border-[#eba200] focus:ring-0 rounded-none px-0 py-2 h-auto">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-black/95 border-white/10">
                  <SelectItem
                    value="1-5"
                    className="text-white hover:bg-white/10"
                  >
                    1 - 5
                  </SelectItem>
                  <SelectItem
                    value="5-20"
                    className="text-white hover:bg-white/10"
                  >
                    5 - 20
                  </SelectItem>
                  <SelectItem
                    value="20+"
                    className="text-white hover:bg-white/10"
                  >
                    20 or more
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-white hover:bg-[#eba200] hover:text-black text-black font-alliance font-bold text-lg py-6 transition-all duration-300 mt-12"
          disabled={isSubmitting}
        >
          {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
        </Button>
      </form>

      <a
        href="/pdf/FIELDKIT.pdf"
        download
        className="hidden"
        id="downloadWhitePaper"
      />
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

const downloadWhitepaper = (toast: any) => () => {
  toast({
    title: "Fiedlkit",
    description: "Submit the details first",
    variant: "default",
    duration: 3000,
  });
  const elem = document.getElementById("fieldKitForm");
  elem?.scrollIntoView();
};

export default function Fieldkit() {
  const { toast } = useToast();
  return (
    <div className="pt-16 min-h-screen bg-[#0D1117]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-start pt-8">
        <div className="container mx-auto px-4 py-4">
          {/* Top Row - Title and Description Aligned */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
            {/* Left Side - Title */}
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

            {/* Right Side - Description and Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 lg:pt-4"
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Delivering AI directly to the field
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <span
                  className="text-white text-lg font-alliance font-medium border-b-2 border-white hover:border-transparent transition-all duration-300 cursor-pointer w-fit pb-1"
                  onClick={downloadWhitepaper(toast)}
                >
                  Download the Whitepaper →
                </span>
              </div>
            </motion.div>
          </div>
          {/* Product Image - Full Container Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full"
          >
            <div className="w-full h-80 md:h-[500px] lg:h-[600px] xl:h-[800px]">
              <img
                src="/fieldkit-hero.png"
                alt="MAC FIELDKIT Device"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Information Section */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-alliance font-bold text-white mb-8">
                  A fully disconnected intelligence center. Powered by MAC.
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The MAC FIELDKIT puts intelligence where work happens, not
                  where Wi-Fi is. Teams plan, execute, and capture proof under
                  low-power, low-bandwidth, or no-signal conditions with secure
                  store-and-forward sync.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                  {/* POWER Card */}
                  <div className="border border-white/20 bg-black/40 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">POWER</h3>
                    <p className="text-[#64FFDA] text-sm mb-4">
                      ~768 Wh LFP • 800 W AC
                    </p>
                    <div className="text-gray-300 text-sm space-y-2">
                      <p>Usable energy ≈ 768 Wh; LiFePO₄ (≈3000+ cycles)</p>
                      <p>
                        Outputs: AC pure-sine, USB-C PD (≤100 W), 12–13 V DC
                      </p>
                      <p>Pass-through charging and full BMS protections</p>
                      <p>
                        Runtime chips: Offline ~9.1 h, Sat idle ~7.2 h, Sat
                        active ~4.3 h
                      </p>
                    </div>
                  </div>

                  {/* CONNECTIVITY Card */}
                  <div className="border border-white/20 bg-black/40 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">
                      CONNECTIVITY
                    </h3>
                    <p className="text-[#64FFDA] text-sm mb-4">
                      LEO backhaul • ~100/10 Mbps
                    </p>
                    <div className="text-gray-300 text-sm space-y-2">
                      <p>
                        Typical latency ~20–50 ms, store-and-forward on link
                        loss
                      </p>
                      <p>Power draw ~15–40 W (idle→active)</p>
                      <p>
                        Integrated AP/router + Ethernet hand-off; multipath
                        failover (LTE/5G/PTP/LAN)
                      </p>
                    </div>
                  </div>

                  {/* DISPLAYS Card */}
                  <div className="border border-white/20 bg-black/40 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">
                      DISPLAYS
                    </h3>
                    <p className="text-[#64FFDA] text-sm mb-4">
                      Dual 15.6″ OLED • ~300 nit
                    </p>
                    <div className="text-gray-300 text-sm space-y-2">
                      <p>
                        USB-C (DP Alt-Mode), ~8–12 W each at work brightness
                      </p>
                      <p>
                        Anti-glare protector option; lid-integrated mounting
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* I/O & ORCHESTRATION Card */}
                  <div className="border border-white/20 bg-black/40 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">
                      I/O & ORCHESTRATION
                    </h3>
                    <p className="text-[#64FFDA] text-sm mb-4">
                      TB4/USB4 • 40 Gb/s
                    </p>
                    <div className="text-gray-300 text-sm space-y-2">
                      <p>Up to ~98 W host PD, ~18-port class with 2.5 GbE</p>
                      <p>DisplayPort 1.4, high-speed USB-A/C, UHS-II SD</p>
                      <p>One-cable host attach; camera/sensor chain friendly</p>
                    </div>
                  </div>

                  {/* EDGE OPS BEHAVIOR Card */}
                  <div className="border border-white/20 bg-black/40 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">
                      EDGE OPS BEHAVIOR
                    </h3>
                    <p className="text-[#64FFDA] text-sm mb-4">
                      Offline-first • On-box inference
                    </p>
                    <div className="text-gray-300 text-sm space-y-2">
                      <p>
                        Local models + services keep the control loop running
                        with zero backhaul
                      </p>
                      <p>
                        Conflict-aware sync on link return; hashed object
                        provenance
                      </p>
                      <p>
                        Security: full-disk encryption, WPA2/3, optional
                        IPsec/WireGuard
                      </p>
                    </div>
                  </div>

                  {/* QUICK SELECT Card */}
                  <div className="border border-white/20 bg-black/40 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">
                      QUICK SELECT
                    </h3>
                    <p className="text-[#64FFDA] text-sm mb-4">
                      4–9 h runtime • Sub-50 ms class
                    </p>
                    <div className="text-gray-300 text-sm space-y-2">
                      <p>Power: ~768 Wh LFP / 800 W AC; PD 100 W</p>
                      <p>Connectivity: LEO ~100/10 Mbps; ~15–40 W draw</p>
                      <p>Workfaces: dual 15.6″ OLED (~300 nit)</p>
                      <p>I/O: TB4, 2.5 GbE, high-port dock class</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 mt-8">
                {[
                  "POWER",
                  "CONNECTION",
                  "MULTIDISPLAY",
                  "PORTABLE",
                  "CHARGING",
                  "COMPUTE",
                  "INTEROPERABLE",
                  "MIL-SPEC",
                ].map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Defining Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-alliance font-bold text-white mb-6">
                  Industry Defining
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  FIELDKIT brings AI to the field physically in this
                  revolutionary form factor, redefining what's possible for edge
                  intelligence operations.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* FIELDKIT Column */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#eba200] mb-4">
                      FIELDKIT
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Next-Generation Edge Intelligence
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="border border-white/20 bg-black/40 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">
                        Mobility
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Vehicle tie-down mobility for rapid deployment
                      </p>
                    </div>

                    <div className="border border-white/20 bg-black/40 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Power</h4>
                      <p className="text-gray-300 text-sm">
                        ~768 Wh LFP / 800 W AC with extended runtime
                      </p>
                    </div>

                    <div className="border border-white/20 bg-black/40 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">
                        Operation
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Offline-first architecture for zero-dependency ops
                      </p>
                    </div>

                    <div className="border border-white/20 bg-black/40 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">
                        Connectivity
                      </h4>
                      <p className="text-gray-300 text-sm">
                        LEO backhaul (~100/10 Mbps class, sub-50 ms typical)
                      </p>
                    </div>

                    <div className="border border-white/20 bg-black/40 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">
                        Interface
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Dual 15.6″ OLED workfaces for immersive ops
                      </p>
                    </div>

                    <div className="border border-white/20 bg-black/40 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">I/O</h4>
                      <p className="text-gray-300 text-sm">
                        TB4 fabric with high-speed interconnects
                      </p>
                    </div>
                  </div>
                </div>

                {/* Legacy Cabinet Column */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-500 mb-4">
                      Legacy Cabinet
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Traditional Fixed Installation
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="border border-gray-600/40 bg-gray-900/40 p-4 rounded-lg">
                      <h4 className="text-gray-400 font-semibold mb-2">
                        Mobility
                      </h4>
                      <p className="text-gray-500 text-sm">
                        Casters/crane lift for limited repositioning
                      </p>
                    </div>

                    <div className="border border-gray-600/40 bg-gray-900/40 p-4 rounded-lg">
                      <h4 className="text-gray-400 font-semibold mb-2">
                        Enclosure
                      </h4>
                      <p className="text-gray-500 text-sm">
                        Large 16-ga steel ~55″×30″×75″, heavy (~700+ lb class)
                      </p>
                    </div>

                    <div className="border border-gray-600/40 bg-gray-900/40 p-4 rounded-lg">
                      <h4 className="text-gray-400 font-semibold mb-2">
                        Power
                      </h4>
                      <p className="text-gray-500 text-sm">
                        Shore-power with small UPS (≈30 min backup)
                      </p>
                    </div>

                    <div className="border border-gray-600/40 bg-gray-900/40 p-4 rounded-lg">
                      <h4 className="text-gray-400 font-semibold mb-2">
                        Installation
                      </h4>
                      <p className="text-gray-500 text-sm">
                        Door-frame fit requirements for deployment
                      </p>
                    </div>

                    <div className="border border-gray-600/40 bg-gray-900/40 p-4 rounded-lg">
                      <h4 className="text-gray-400 font-semibold mb-2">
                        Interface
                      </h4>
                      <p className="text-gray-500 text-sm">
                        Integrated TV/laser printer setup
                      </p>
                    </div>

                    <div className="border border-gray-600/40 bg-gray-900/40 p-4 rounded-lg">
                      <h4 className="text-gray-400 font-semibold mb-2">
                        Connectivity
                      </h4>
                      <p className="text-gray-500 text-sm">
                        Traditional network infrastructure dependency
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footnote */}
              <div className="text-center pt-8 border-t border-white/10">
                <p className="text-gray-500 text-sm">
                  Runtimes are scenario-dependent; "legacy cabinet" specs
                  summarized from public datasheets.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-[#0D1117]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Side - Title */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-alliance font-bold text-white uppercase">
                  GET STARTED
                  <br />
                  TODAY
                </h2>
              </div>

              {/* Right Side - Form */}
              <div id="fieldKitForm">
                <FieldkitInterestForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
