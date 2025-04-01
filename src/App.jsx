import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Auth } from '@supabase/auth-ui-react';  
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from "../supabaseClient";


 
 const App = () => {

  const [session, setSession] = useState(null)

  useEffect(() => { 
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)      
    })      
    
    const {        
      data: { subscription },      
    } = supabase.auth.onAuthStateChange((_event, session) => {        
      setSession(session)      
    })      
    
    return () => subscription.unsubscribe()    
  }, [])

  console.log(session?.user?.email)

  const signOut = async() => {
    const { error } = await supabase.auth.signOut();
  };

  const signUp = async() => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    })
  }

  if (!session) {      
    return (
      // <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      <button onClick={() => signUp()}>
        Sign In with Google
      </button>
    )    
  }    else {      
    return (
      <div>
        <Navbar session={session} signOut={signOut}/>
        <Outlet />
        <Footer />
     </div>
    )    
  }
}
 
 
 export default App
 