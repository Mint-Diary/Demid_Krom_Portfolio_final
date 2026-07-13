import {
  SiProxmox,
  SiKubernetes,
  SiDocker,
  SiTraefikproxy,
  SiTerraform,
  SiAnsible,
  SiVault,
  SiGitlab,
  SiArgo,
  SiPrometheus,
  SiGrafana,
  SiKeycloak,
  SiCloudflare,
  SiHetzner,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaRocket } from "react-icons/fa";
import { useTranslation } from "../i18n/index.jsx";
import FireAlarm from "./FireEasterEgg/FireAlarm.jsx";

export default function LogosBoxedwithHeading() {
  const { t } = useTranslation();

  // NOTE: Technology names like "React", "TypeScript", "Vue.js" are not localized.
  // These are proper names and remain the same across all languages (including Arabic, Japanese, etc.).
  // Do NOT include them in i18n translations, only localize the surrounding descriptive text if needed.
  const technologies = [
    {
      name: "Proxmox",
      icon: <SiProxmox />,
      shadow: "hover:shadow-orange-500/10 dark:hover:shadow-orange-500/30",
      icon_color: "text-orange-600 dark:text-orange-500",
      proficiency: t("tech.proficiencyLevels.expert"),
    },
    {
      name: "Kubernetes",
      icon: <SiKubernetes />,
      shadow: "hover:shadow-blue-500/10 dark:hover:shadow-blue-500/30",
      icon_color: "text-blue-600 dark:text-blue-500",
      proficiency: t("tech.proficiencyLevels.expert"),
    },
    {
      name: "Docker",
      icon: <SiDocker />,
      shadow: "hover:shadow-blue-500/10 dark:hover:shadow-blue-500/30",
      icon_color: "text-blue-500 dark:text-blue-400",
      proficiency: t("tech.proficiencyLevels.expert"),
    },
    {
      name: "Traefik",
      icon: <SiTraefikproxy />,
      shadow: "hover:shadow-sky-500/10 dark:hover:shadow-sky-500/30",
      icon_color: "text-sky-500 dark:text-sky-400",
      proficiency: t("tech.proficiencyLevels.advanced"),
    },
    {
      name: "Terraform / OpenTofu",
      icon: <SiTerraform />,
      shadow: "hover:shadow-purple-500/10 dark:hover:shadow-purple-500/30",
      icon_color: "text-purple-600 dark:text-purple-400",
      proficiency: t("tech.proficiencyLevels.advanced"),
    },
    {
      name: "Ansible",
      icon: <SiAnsible />,
      shadow: "hover:shadow-black/10 dark:hover:shadow-white/20",
      icon_color: "text-black dark:text-white",
      proficiency: t("tech.proficiencyLevels.advanced"),
    },
    {
      name: "Kestra",
      icon: <FaRocket />,
      shadow: "hover:shadow-violet-500/10 dark:hover:shadow-violet-500/30",
      icon_color: "text-violet-600 dark:text-violet-400",
      proficiency: t("tech.proficiencyLevels.advanced"),
    },
    {
      name: "HashiCorp Vault",
      icon: <SiVault />,
      shadow: "hover:shadow-yellow-500/10 dark:hover:shadow-yellow-500/30",
      icon_color: "text-yellow-500 dark:text-yellow-400",
      proficiency: t("tech.proficiencyLevels.advanced"),
    },
    {
      name: "GitLab CI/CD",
      icon: <SiGitlab />,
      shadow: "hover:shadow-orange-500/10 dark:hover:shadow-orange-500/30",
      icon_color: "text-orange-500 dark:text-orange-400",
      proficiency: t("tech.proficiencyLevels.expert"),
    },
    {
      name: "ArgoCD",
      icon: <SiArgo />,
      shadow: "hover:shadow-orange-500/10 dark:hover:shadow-orange-500/30",
      icon_color: "text-orange-400 dark:text-orange-300",
      proficiency: t("tech.proficiencyLevels.advanced"),
    },
    {
      name: "Prometheus",
      icon: <SiPrometheus />,
      shadow: "hover:shadow-red-500/10 dark:hover:shadow-red-500/30",
      icon_color: "text-red-600 dark:text-red-500",
      proficiency: t("tech.proficiencyLevels.advanced"),
    },
    {
      name: "Grafana",
      icon: <SiGrafana />,
      shadow: "hover:shadow-amber-500/10 dark:hover:shadow-amber-500/30",
      icon_color: "text-amber-600 dark:text-amber-500",
      proficiency: t("tech.proficiencyLevels.advanced"),
    },
    {
      name: "Keycloak",
      icon: <SiKeycloak />,
      shadow: "hover:shadow-slate-500/10 dark:hover:shadow-slate-500/30",
      icon_color: "text-slate-600 dark:text-slate-300",
      proficiency: t("tech.proficiencyLevels.intermediate"),
    },
    {
      name: "Azure",
      icon: <VscAzure />,
      shadow: "hover:shadow-blue-500/10 dark:hover:shadow-blue-500/30",
      icon_color: "text-blue-600 dark:text-blue-400",
      proficiency: t("tech.proficiencyLevels.intermediate"),
    },
    {
      name: "Hetzner",
      icon: <SiHetzner />,
      shadow: "hover:shadow-rose-500/10 dark:hover:shadow-rose-500/30",
      icon_color: "text-rose-600 dark:text-rose-500",
      proficiency: t("tech.proficiencyLevels.advanced"),
    },
    {
      name: "Cloudflare",
      icon: <SiCloudflare />,
      shadow: "hover:shadow-orange-500/10 dark:hover:shadow-orange-500/30",
      icon_color: "text-orange-500 dark:text-orange-400",
      proficiency: t("tech.proficiencyLevels.intermediate"),
    },
  ];

  return (
    <section
      id="tech"
      className="section-wrapper bg-slate-100 dark:bg-slate-900"
    >
      <header className="section-heading">
        <h2 className="section-title">{t("tech.title")}</h2>
        <p className="section-subtitle">{t("tech.subtitle")}</p>
      </header>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:gap-14">
        <div className="grid grow grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              data-flammable
              className={`group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-800/50 ${tech.shadow} hover:border-slate-300 dark:hover:border-slate-700`}
            >
              <div className="flex items-center">
                <div className={`mr-3 text-2xl ${tech.icon_color}`}>
                  {tech.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {tech.name}
                  </h4>
                  {tech.proficiency && (
                    <p className="text-xs text-slate-500 dark:text-gray-400">
                      {tech.proficiency}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Fire easter egg: the Feuermelder hangs right next to the cards */}
        <FireAlarm />
      </div>
    </section>
  );
}
