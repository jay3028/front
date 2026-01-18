function App() {
  // Generate world map pattern dots (simplified continents)
  const generateWorldMapDots = () => {
    const dots = [];
    const radius = 128; // Circle radius (w-64 h-64 = 256px, so radius is 128)
    const centerX = 128;
    const centerY = 128;

    // North America (left side)
    for (let lat = -20; lat <= 50; lat += 3) {
      for (let lon = -120; lon <= -60; lon += 4) {
        const phi = (lat * Math.PI) / 180;
        const theta = (lon * Math.PI) / 180;
        const x = centerX + radius * Math.cos(phi) * Math.cos(theta);
        const y = centerY + radius * Math.sin(phi);
        
        // Shape it like North America
        if (lon > -110 && lon < -70 && lat > 25 && lat < 50) {
          dots.push({ x, y });
        } else if (lon > -100 && lon < -80 && lat > 10 && lat < 35) {
          dots.push({ x, y });
        }
      }
    }

    // South America (left side, lower)
    for (let lat = -50; lat <= 10; lat += 3) {
      for (let lon = -80; lon <= -40; lon += 4) {
        const phi = (lat * Math.PI) / 180;
        const theta = (lon * Math.PI) / 180;
        const x = centerX + radius * Math.cos(phi) * Math.cos(theta);
        const y = centerY + radius * Math.sin(phi);
        
        if (lon > -75 && lon < -45 && lat > -50 && lat < 10) {
          dots.push({ x, y });
        }
      }
    }

    // Europe/Africa (center)
    for (let lat = -35; lat <= 60; lat += 3) {
      for (let lon = -20; lon <= 40; lon += 4) {
        const phi = (lat * Math.PI) / 180;
        const theta = (lon * Math.PI) / 180;
        const x = centerX + radius * Math.cos(phi) * Math.cos(theta);
        const y = centerY + radius * Math.sin(phi);
        
        // Europe
        if (lon > -10 && lon < 40 && lat > 35 && lat < 70) {
          dots.push({ x, y });
        }
        // Africa
        if (lon > -20 && lon < 50 && lat > -35 && lat < 35) {
          dots.push({ x, y });
        }
      }
    }

    // Asia (right side)
    for (let lat = -10; lat <= 70; lat += 3) {
      for (let lon = 40; lon <= 150; lon += 4) {
        const phi = (lat * Math.PI) / 180;
        const theta = (lon * Math.PI) / 180;
        const x = centerX + radius * Math.cos(phi) * Math.cos(theta);
        const y = centerY + radius * Math.sin(phi);
        
        if (lon > 50 && lon < 140 && lat > 10 && lat < 60) {
          dots.push({ x, y });
        }
      }
    }

    // Australia (bottom right)
    for (let lat = -40; lat <= -10; lat += 4) {
      for (let lon = 110; lon <= 155; lon += 5) {
        const phi = (lat * Math.PI) / 180;
        const theta = (lon * Math.PI) / 180;
        const x = centerX + radius * Math.cos(phi) * Math.cos(theta);
        const y = centerY + radius * Math.sin(phi);
        
        if (lon > 115 && lon < 155 && lat > -40 && lat < -10) {
          dots.push({ x, y });
        }
      }
    }

    return dots;
  };

  const worldMapDots = generateWorldMapDots();

  // Blockchain/Network names
  const chainNames = [
    'Ethereum', 'Sepolia', 'Holesky', 'Hoodi', 'BNB Smart Chain', 'Polygon',
    'Base', 'Arbitrum', 'Arbitrum Nova', 'Linea', 'Blast', 'OP',
    'Avalanche', 'BitTorrent Chain', 'Celo', 'Fraxtal', 'Gnosis', 'Mantle',
    'Memecore', 'Moonbeam', 'Moonriver', 'Moonbase Alpha', 'opBNB', 'Scroll',
    'Taiko', 'XDC', 'ApeChain', 'World', 'Sonic', 'Unichain',
    'Abstract', 'Berachain', 'Swellchain'
  ];

  // Extend chainNames if needed for row 3 (14 blocks)
  const extendedChainNames = chainNames.length >= 39 ? chainNames : 
    [...chainNames, ...chainNames.slice(0, 39 - chainNames.length)];

  // Helper function to create a pill element
  const createPill = (name, icon = null, isSoneium = false) => (
    <div key={name} className="bg-white border border-gray-200 rounded-full px-4 py-2.5 shadow-sm flex items-center gap-3 flex-shrink-0">
      {isSoneium ? (
        <div className="w-6 h-6 flex-shrink-0">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <circle cx="12" cy="12" r="11" fill="#6366f1"/>
            <path d="M8 10C8 8 9 7 11 7C13 7 14 8 14 10V14C14 16 13 17 11 17C9 17 8 16 8 14" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
            <path d="M11 7V17" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
      ) : (
        <div className="w-5 h-5 flex-shrink-0">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-700">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      )}
      <span className={`text-sm ${isSoneium ? 'font-semibold text-gray-800' : 'font-medium text-gray-700'} whitespace-nowrap`}>{name}</span>
    </div>
  );

  // Distribute names across rows (keeping Soneium first in row 1)
  // Row 1: 13 blocks (Soneium + 12 more), Row 2: 13 blocks, Row 3: 14 blocks
  const row1Names = ['Soneium', ...extendedChainNames.slice(0, 12)];
  const row2Names = extendedChainNames.slice(12, 25);
  const row3Names = extendedChainNames.slice(25, 39);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="border-0 rounded-none w-[600px] h-[400px] relative overflow-hidden">
        {/* Text Content - Top Left */}
        <div className="absolute top-1 left-4 right-6 z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
            Track Across Chains.
          </h1>
          <p className="text-[11px] md:text-xs text-gray-900 leading-relaxed">
            With Cryptique, track user behavior not just on your dapps<br />
            but those across chains and platforms all in one place,<br />
            in seconds
          </p>
        </div>

        {/* Pill-shaped Containers - Row 1 (Left to Right) */}
        <div className="absolute top-[48%] left-0 right-0 -translate-y-1/2 z-10 overflow-hidden pause-on-hover">
          <div className="flex items-center gap-3 animate-scroll-pills-right">
            {[...row1Names, ...row1Names].map((name, idx) => 
              createPill(name, null, idx % row1Names.length === 0)
            )}
          </div>
        </div>

        {/* Pill-shaped Containers - Row 2 (Right to Left) */}
        <div className="absolute top-[63%] left-0 right-0 -translate-y-1/2 z-10 overflow-hidden pause-on-hover">
          <div className="flex items-center gap-3 animate-scroll-pills-left">
            {[...row2Names, ...row2Names].map((name) => createPill(name))}
          </div>
        </div>

        {/* Pill-shaped Containers - Row 3 (Left to Right) */}
        <div className="absolute top-[78%] left-0 right-0 -translate-y-1/2 z-10 overflow-hidden pause-on-hover">
          <div className="flex items-center gap-3 animate-scroll-pills-right">
            {[...row3Names, ...row3Names].map((name) => createPill(name))}
          </div>
        </div>

        {/* Solid black circle in bottom-right corner with world map pattern */}
        <div className="absolute bottom-0 right-0 w-80 h-80 translate-x-[20%] translate-y-[20%] drop-shadow-2xl">
          <div className="w-full h-full animate-rotate-anticlockwise">
            <svg viewBox="0 0 256 256" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.5))' }}>
            {/* Black circle background */}
            <circle cx="128" cy="128" r="128" fill="black" />
            
            {/* World map pattern - white dots forming continents */}
            {worldMapDots.map((dot, idx) => (
              <circle
                key={idx}
                cx={dot.x}
                cy={dot.y}
                r="1"
                fill="white"
                opacity="0.9"
              />
            ))}
          </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;