import { useContext } from 'react'
import styles from './App.module.scss'
import { AuthContext } from './contexts/auth';
import { LoginBox } from './LoginBox/Index'
import { MessageList } from './MessageList/Index'
import { SendMessage } from './SendMessageForm/Index';

export function App() {
  const { user } = useContext(AuthContext);
  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
      <MessageList />
      {!!user ? <SendMessage /> : <LoginBox />}
    </main>
  )
}
