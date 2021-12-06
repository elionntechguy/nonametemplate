import { ClientsMainContainer } from "../styles/ClientsStyles";

import { ClientsLogos } from "../components/clientsComponents/ClientsLogos";

export const Clients: React.FC = () => {
  return (
    <div className="clients-main">
      <ClientsMainContainer>
        <ClientsLogos />
      </ClientsMainContainer>
    </div>
  );
};
