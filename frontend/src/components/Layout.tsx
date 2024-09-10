// src/components/Layout.tsx

import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Movie App</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/movies">Movies</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 Movie App</p>
      </footer>
    </div>
  );
};

export default Layout;