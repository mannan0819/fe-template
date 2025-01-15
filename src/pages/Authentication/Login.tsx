import { useContext, useState } from 'react';
import Logo from '@/components/Logo';
import BackgroundImage from '../../../public/food-image-1.jpg';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { UserContext } from '@/auth/UserContext';
import { API_URL } from '@/shared/constants';

const Login = () => {
  const context = useContext(UserContext);
  const login = context?.login;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('Logging in...');
    // Replace with actual authentication logic
    // const userData = {
    //   id: 1,
    //   name: 'John Doe',
    //   email: 'john.doe@example.com',
    // };
    console.log('email:', email);
    console.log('password:', password);
    const loginRes = await axios.post(
      `${API_URL}/public/login`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      },
    );
    console.log('loginRes:', loginRes);
    if (loginRes.status !== 200 || !loginRes.data) {
      //   console.log('Login failed');
      //   return;
    }
    if (login) {
      login(loginRes.data);
      console.log('User logged in:', loginRes.data);
    }
    console.log('here');
  };

  return (
    <section
      style={{
        textAlign: 'center',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Set height to cover the full viewport
        width: '100vw', // Set width to cover the full viewport
      }}
    >
      <h1 style={{}}>
        <div
          className="flex justify-center pt-28"
          style={{ maxWidth: '400px', margin: 'auto auto' }}
        >
          <Logo />
        </div>
      </h1>
      <p style={{ marginTop: '1rem', color: '#4a4a4a' }}>
        <div className="max-w-sm mx-auto pt-3">
          <Card className="bg-gradient-to-b from-custom-pink via-white to-white">
            <CardHeader>
              <Link to="/">
                <CardTitle className="flex flex-row justify-center items-center">
                  <div style={{ maxWidth: '140px', margin: '0 auto' }}>
                    <Logo colorVariant="black" />
                    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                      Login
                    </h2>
                  </div>
                </CardTitle>
              </Link>
              <CardDescription>Login</CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="mt-3"
              />
              <a href="#" className="text-right block mt-2 mr-1 text-sm">
                Forgot Password?
              </a>
              <Button className="mt-3 w-full" onClick={handleLogin}>
                Get Started
              </Button>
            </CardContent>
            <CardFooter>
              <p>Sign in with other providers coming soon</p>
            </CardFooter>
          </Card>
        </div>
      </p>
    </section>
  );
};

export default Login;
