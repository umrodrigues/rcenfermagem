'use client'
import { useEffect, useState } from 'react'
import styles from './Cookies.module.scss'

export default function Cookies() {
  const [show, setShow] = useState(false)
  const [usage, setUsage] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const cookies = document.cookie
    const accepted = cookies.includes('cookieConsent=true')
    if (!accepted) setShow(true)
  }, [])

  const handleAccept = () => {
    const options = []
    if (usage) options.push('usage')
    if (marketing) options.push('marketing')
    const expires = new Date()
    expires.setFullYear(expires.getFullYear() + 1)
    document.cookie = `cookieConsent=true; expires=${expires.toUTCString()}; path=/`
    document.cookie = `cookieOptions=${options.join(',')}; expires=${expires.toUTCString()}; path=/`
    setShow(false)
  }

  if (!show) return null

  return (
    <div className={styles.cookieWrapper}>
      <p className={styles.cookieText}>
        Utilizamos cookies essenciais e tecnologias semelhantes de acordo com a nossa <a href="/politica-de-privacidade">Política de Privacidade</a> e <a href="termos-de-uso" >Termos de Uso</a> e ao continuar navegando, você concorda com estas condições.
      </p>
      <div className={styles.cookieOptions}>
        <p className={styles.cookieLabel}>Permito o uso de cookies para:</p>
        <div className={styles.checkboxes}>
          <label>
            <input type="checkbox" checked={usage} onChange={() => setUsage(!usage)} />
            Análise de Uso
          </label>
          <label>
            <input type="checkbox" checked={marketing} onChange={() => setMarketing(!marketing)} />
            Marketing
          </label>
        </div>
        <button className={styles.saveButton} onClick={handleAccept}>
          Salvar e Continuar
        </button>
      </div>
    </div>
  )
}
