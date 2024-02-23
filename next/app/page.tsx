import styles from "./page.module.css";
import { SearchBox } from "./components/SearchBox";
import { fetchData } from "./api";

const items = [
  {
    name: "QuantumCompute as a Service (QCaaS): overview",
    description:
      "QCaaS allows users to harness the power of quantum computing without the need for complex infrastructure. Users can submit quantum computing tasks and receive results through a simple API, making quantum computing accessible for a wide range of applications.",
    breadcrumb: ["Compute services", "Quantum computing", "QCaaS"],
  },
  {
    name: "NeuralNet Storage (NNS): architecture",
    description:
      "NNS is a cloud storage service specifically designed for machine learning models and datasets. It provides optimized storage and retrieval for neural networks, making it easy for developers to manage and deploy machine learning projects seamlessly.",
    breadcrumb: ["Storage services", "Other storage", "NNS"],
  },
  {
    name: "Augmented Reality Rendering Platform (ARRP)",
    description:
      "ARRP is a cloud service dedicated to rendering complex augmented reality (AR) scenes in real-time. Developers can offload the resource-intensive rendering process to the cloud, enabling the creation of immersive AR applications without the need for powerful local hardware.",
    breadcrumb: ["VR and AR services", "AR", "ARRP"],
  },
];

export default async function Home() {
  const res = await fetchData();

  return <SearchBox searchResultItems={items} />;
}
