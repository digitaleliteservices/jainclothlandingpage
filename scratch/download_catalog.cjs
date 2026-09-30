const fs = require('fs');
const path = require('path');
const https = require('https');

const outputDir = path.join(__dirname, '..', 'public', 'assets', 'images');

const newCatalogImages = [
  {
    name: 'spotlight_ilkal.jpg',
    baseUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0gmsQEf2iy2tU_XeWj5yLUeAIM6Glqe1VKB5U02P_7ZagjWXTBDWqvSlyngtI_dP2YE6XscNV8uic1NzWZMenP55jWFh4iy3shpC3iQdcqeM94kz62E4WCeyOg2e-hp-Ub9RK6r3uo1mmshYJbEaVZCP1que6pcLXEGCnv02mr_TXAqhOxGeYgmTNRmxsM4YUryKMuPcOXxvkPYs5LTDBX--CCeTOv-jHS3GF5dYwRZuSqj9MI8tR'
  },
  {
    name: 'prod_maroon_topi.jpg',
    baseUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyW2TapArj-nORNamqf-2JlixtKpGrQIlkCep5pMG_ViCtyp9C9xfsc_UrjF3nFuWK9XIgq6hyH8CPImctEK_IJ3KX5p818GXQ8e8kaBIX7X_-fwGmOXp2UZdjC8zBTpWb2mTj5EYYAtUy8CaT-XrpIAgu7NLKhR3Z1d-SxOH3xVBWofqIPqFXSiZikdwl1ZcbO_u416zJiqg_N5qE727gC3VHW6WG1HwIFjvrwv1nZbhqkP2qfCTu'
  },
  {
    name: 'prod_peacock_blue.jpg',
    baseUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoAqBofOm5JlPfK5yB_X5Mh2E1zJ4lxxvJJgdwau23vOijqQLdIOV4GkhaDBOCmDXUr9I4gZM6Xe2wV0BgJDcsROxwQxiUeZ6Zc83UZXlyaGx3CkZ0WSfL4M9JJgaUEOAwGZrxoeQ58qSqBHhmZ4yErxImydaa3_DA_zcsJq059T36DZvtvdNl3Dx1b8Wi-7nALv0hvsJWPBpXAaylS1A6kF_1FBK_AevN-mk2qG3ZfpOdXlXNSsAt'
  },
  {
    name: 'prod_velvet_lehenga.jpg',
    baseUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDweDPlT9mXtEJOF6Y62KyDSW8OJbMC26ySj3tUjiDMQfDQifUaI5HnUOYTZILStxIZeAR58DAYitEYJPMLt_WGAeXHHc-vemWEZ6Y-01LtLNh66-f_rpEDeaGZPC8ohQgAKcrf--tP-xIOEH3zhnAfWEnWcdL_yOB90xaRnzoXgBGXYwVNPqwkF2g1kIj7RXtX2Di1YGj1A5awLlVeUn_8dVfv9zx_EGRvbOHHcFEgq33f7KmE2if6'
  },
  {
    name: 'prod_ivory_sherwani.jpg',
    baseUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc1T1eSEIFQX3_5FTgHC8xJaNPzJPZQfad01x9Odulmv7VcJIyWdpt_6iGsHLIdltqZXf5o8IB4mFIZywLdZ0lu6ncc1yBMzkJIfsqKfAwjhshrngKitQwnaVg956VznHV3JZpH4TwoL2npm5VPaT7geO8Rkg8eISuz2ZJfIOLuHFZGtXRIfFroVPhmSeo3N70RtJO2l7N4Dsu5xM_jMnnwEdtlatBB2jrULojKoLbtAXwSfexDg69'
  },
  {
    name: 'prod_emerald_green.jpg',
    baseUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPZkEz120V4WKJfXVOISuMo-1B1DUG6q9mUU4_Qq6owJEv0QoNs0dCR_BoiXDemWc9s7H1YXYZmGnxCbkFykopZDdQZ9kqYIBvMuyi6MH1zy4KlZmCGay8pRQF12N3QkjuwVbHnM0WEELD8VqY96nje7BJFdWtJ59EpFQL42O1oU7bYdTBgI_8z0W0G-1_rK0dye6KCkAf-oShooVQXuNcTOsl6LUjr2MUf2YuCbwjIFSU0LFW7q5Z'
  },
  {
    name: 'prod_kids_pattu.jpg',
    baseUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRdq14QIbpDFD4qvsgV8kPRPaG27M5sxfwQPKe9iIjqQESVduJkgA4jatXOMfSyfBTlOlU6DHfmc5WjuIu0O4YBMgjrKGq5jq0xG8RAlyKBIRGSQw_VroYyL70ZlNRybTxQXbPoyNELimsuPspAM8aTtqenbnkZ87Ve-bKQSGn_l5ga9b8ZSdwECMwZIomNq4QCE5TNkCqLuTmg0oyxw2HL84JQFbjl4GLSCv_KH-AEa6SPeZwpGTV'
  },
  {
    name: 'prod_dusk_anarkali.jpg',
    baseUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZxV9y_sKTUrSq9r1VjI9mtlxxjih8cVXlac5RVKO6Y44HSMVSaPp0QgwGh3UGruegf6nDnCXcK0Vn76dNS6STDd1-ScXaGhFxF-1M1HxVFDuzpwGJh6yPxb6hEmi-cDcK6-AzUZMd_xA6qkIZvx2byIAEJ07YUW90SAkYPQ_4LL_gXdbosg-yV-7WOtyC_aMP540e4ZjbtI1oBQQU2uK2aYUktIrVgr379AFFYpBRMnve66EVJdz2'
  },
  {
    name: 'prod_boys_dhoti.jpg',
    baseUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC2QHlDXV8Vs234RlGXFuFUm5Fdq7yk7Ja7Jr-5lX6FaSD8KQ5Ynj_LDlwQZson-DYLxHgiT9g0djCTVQJCLw30yxHNxI67gFcnfiQjx_U63MCC_ZacGZBC1Ul4hMuhdIqq59sFkwU73j-nuuWCWRy146CvJgKzPotrKvrg5s4518ZEMT68SBM9F0ssafrP7-UuOfzvlFpUirljUytHZRi3co0ib9dnnN2PFiS1Iboa0xhWzsNYidt'
  },
  {
    name: 'prod_bulk_trousseau.jpg',
    baseUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4V1rfBA10PQvz2xMRQ6RL2Hmn6v-J94JCKmx0ogaAtz8nuoDoJ-isJlH9Kwf4MnDRatz3Ns3W1G13CK6Qg-SKZ6Q6M7wtq8gaoHTG_B-ex3DPZxzXcJIZBMV7E5535OzMeEIh5dWAeP495dBJcayMxwK21VsN4JozYz6R-30bbh19LLAEvNqQNmVh8OYvTrQJ-PwEDKcwKRSy80_sVIyFsPpUD76JUubWCZ3VXSOrxIjKcK-q2q8b'
  }
];

function fetchHighRes(item) {
  return new Promise((resolve) => {
    const fullUrl = item.baseUrl + '=s2048';
    const filePath = path.join(outputDir, item.name);
    const file = fs.createWriteStream(filePath);
    https.get(fullUrl, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          const stats = fs.statSync(filePath);
          console.log(`Downloaded ${item.name} (${(stats.size / 1024).toFixed(1)} KB)`);
          resolve();
        });
      } else {
        console.error(`Failed ${item.name} status ${res.statusCode}`);
        resolve();
      }
    }).on('error', (err) => {
      console.error(`Error ${item.name}: ${err.message}`);
      resolve();
    });
  });
}

async function run() {
  for (const item of newCatalogImages) {
    await fetchHighRes(item);
  }
  console.log('New catalog images complete.');
}

run();
