import { getToken } from '@/connectors/auth';

type SetupOrganisationParams = {
  code: string;
};

export const setupOrganisation = async ({
  code,
}: SetupOrganisationParams) => {
  
  // retrieve token from SaaS API using the given code
  const { accessToken, grantId } = await getToken(code);

console.log("accessToken", accessToken)
    
//   const timeZone = await getAccountDetails(accessToken);

};
