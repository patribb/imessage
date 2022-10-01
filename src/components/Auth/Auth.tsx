import { useState } from "react";
import { Button, Center, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FC<IAuthProps> = ({ session, reloadSession }) => {
    const [username, setUsername] = useState('');

    const onSubmit = async () => {
      try {
        // create username mutation to send our username to the GraphQL API
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <Center height="100vh">
      <Stack spacing={8} align='center'>
        {session ? (
          <>
          <Text fontSize='xl' fontWeight='600'>Crear Nombre de Usuario</Text>
          <Input fontSize='2xs' placeholder="Elige un nombre de usuario..." value={username} onChange={(e) => setUsername(e.target.value)} />
          <Button width='100%' onClick={onSubmit}>Guardar</Button>
          </>
        ) : (
          <>
            <Text fontSize="3xl" fontWeight='900'>iMessenger</Text>
            <Button
              onClick={() => signIn("google")}
              leftIcon={
                <Image
                  height="20px"
                  alt="Google"
                  src="/images/googlelogo.png"
                />
              }
            >
              Continuar con Google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
};

export default Auth;
