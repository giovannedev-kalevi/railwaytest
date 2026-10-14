
import { useState } from 'react';
import './App.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setMensagem('');

    if (!email.trim() || !senha) {
      setMensagem('Preencha o e-mail e a senha.');
      return;
    }

    setCarregando(true);

    // Futuramente: enviar os dados para a API Go.
    setTimeout(() => {
      setCarregando(false);
      setMensagem(
        'Interface pronta. A autenticação será conectada à API Go.'
      );
    }, 500);
  }

  return (
    <main className="login-page">
      <header className="topbar">
        <a className="brand" href="/" aria-label="SAC - início">
          <span className="brand-name">Sacki Flow</span>
          <span className="brand-divider" />
          <span className="brand-description">
            Central de Atendimento
          </span>
        </a>

        <span className="topbar-caption">
          MAIS AGILIDADE <i /> MAIS SUPORTE <i /> MELHORES RESULTADOS
        </span>
      </header>

      <section className="login-layout">
        <div className="login-card">
          <div className="login-logo">S</div>

          <h1>Central de Atendimento</h1>
          <p className="login-subtitle">
            Acesse sua conta para continuar
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">E-mail corporativo</label>
              <input
                id="email"
                type="email"
                placeholder="nome@empresa.com.br"
                autoComplete="username"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <div className="password-wrapper">
                <input
                  id="senha"
                  type={mostrarSenha ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  autoComplete="current-password"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                  required
                />

                <button
                  className="password-toggle"
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {mostrarSenha ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
            </div>

            <div className="login-options">
              <span className="secure-label">
                <span className="secure-dot" />
                Acesso corporativo
              </span>

              <button
                className="text-button"
                type="button"
                onClick={() =>
                  setMensagem(
                    'A recuperação de senha será disponibilizada pela API.'
                  )
                }
              >
                Esqueceu sua senha?
              </button>
            </div>

            {mensagem && (
              <div className="login-message" role="status">
                {mensagem}
              </div>
            )}

            <button
              className="login-button"
              type="submit"
              disabled={carregando}
            >
              {carregando ? 'Verificando...' : 'Entrar na plataforma'}
              <span aria-hidden="true">→</span>
            </button>
          </form>

          <p className="login-note">
            Ambiente de desenvolvimento · Autenticação ainda não conectada
          </p>
        </div>

        <aside className="system-preview">
          <span className="preview-eyebrow">OPERAÇÃO SAC</span>
          <h2>Atendimento organizado. Informação centralizada.</h2>
          <p>
            Acompanhe chamados, comunicações, devoluções, garantias e
            registros de conformidade em um único ambiente.
          </p>


          <div className="preview-features">
            <span>Chamados</span>
            <span>Mensagens</span>
            <span>Registros</span>
          </div>
        </aside>
      </section>

      <footer className="page-footer">
        <span className="footer-line" />
        <span>ACESSO RESTRITO A COLABORADORES AUTORIZADOS</span>
        <span className="footer-line" />
        <small>© 2026 SAC · Central de Atendimento</small>
      </footer>
    </main>
  );
}
