import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  regionData: any = {
    europe: {
        title: "European Market Analysis",
        subtitle: "Focus on Norwegian Market Trends",
        sections: [
            {
                title: "Political Factors",
                items: [
                    {
                        title: "Government's Slow Crime Response",
                        content: "17% increase in violent crime (2021-2023), with 28% rise in crimes committed by minors. Oslo recorded 10,243 crimes in 2023, including 9 shootings in summer 2024. Norway has 414 police officers per 100,000 people, lower than Zagreb's 519.",
                        stats: {
                            crimeIncrease: "17%",
                            youthCrime: "28%",
                            totalCrimes: 10243
                        }
                    },
                    {
                        title: "Strikes Due to Wage Inequality",
                        content: "20,000 workers went on strike (April 2023) across transport, construction, and hospitality. Gini index increased from 25% to 28% (2021-2022), signaling rising inequality. Government relied on social partnership negotiations instead of direct intervention.",
                        stats: {
                            strikingWorkers: 20000,
                            giniIndexIncrease: "3%"
                        }
                    },
                    {
                        title: "Minister's Conflict of Interest Scandal",
                        content: "Anniken Huitfeldt resigned over her husband's investments in government-related companies. Despite resignation, she was later appointed Norway's Ambassador to the US (2024), raising ethical concerns.",
                        stats: {
                            year: 2024,
                            position: "Ambassador to US"
                        }
                    }
                ]
            },
            {
                title: "Economic Factors",
                items: [
                    {
                        title: "Norwegian Tourism Boost",
                        content: "Weaker currency (Norwegian Krone - NOK) made Norway cheaper for tourists. Increase in foreign tourist arrivals helped pandemic recovery. Government pushing Norway as an adventure & eco-tourism destination.",
                        stats: {
                            currency: "NOK",
                            sector: "Tourism"
                        }
                    },
                    {
                        title: "Record Seafood Exports",
                        content: "13,000 new jobs added in 2023, with 106,000 people employed in the fishing industry. Norway's seafood industry accounts for 15% of exports, with NOK 122.5 billion in salmon sales (up 16%).",
                        stats: {
                            newJobs: 13000,
                            totalEmployed: 106000,
                            exportShare: "15%",
                            salmonSales: 122.5
                        }
                    },
                    {
                        title: "Rising Property Prices",
                        content: "Housing prices increased by 8.2% (2023-2024) due to lowest construction rates since 1946, high interest rates, and rising costs of building materials.",
                        stats: {
                            priceIncrease: "8.2%",
                            period: "2023-2024"
                        }
                    }
                ]
            }
        ]
    },
    africa: {
        title: "African Market Analysis",
        subtitle: "Focus on Botswana's Economic Development",
        sections: [
            {
                title: "Political Factors",
                items: [
                    {
                        title: "Rise of Opposition & Political Fragmentation",
                        content: "Botswana's political stability disrupted by 2024 elections, ending 58-year rule of Botswana Democratic Party (BDP). New ruling party: Umbrella for Democratic Change (UDC) focuses on economic diversification.",
                        stats: {
                            previousRulePeriod: 58,
                            year: 2024
                        }
                    },
                    {
                        title: "Challenges in Public Governance",
                        content: "Transparency issues: Botswana slipped in Corruption Perceptions Index (33rd place in 2010 to 45th in 2021). 8/10 citizens believe corruption worsened under the 2008-2018 presidency.",
                        stats: {
                            corruptionRank2010: 33,
                            corruptionRank2021: 45,
                            publicPerception: "80%"
                        }
                    }
                ]
            },
            {
                title: "Economic Factors",
                items: [
                    {
                        title: "Dependence on Diamonds",
                        content: "80% of Botswana's foreign earnings come from diamonds, but industry revenues fell by 52% in 2024. Market threats include growth of lab-grown diamonds (15-20% global market share).",
                        stats: {
                            diamondEarnings: "80%",
                            revenueDrop: "52%",
                            labGrownShare: "15-20%"
                        }
                    },
                    {
                        title: "Growing Public Debt",
                        content: "Government spending has grown unsustainably, leading to 2.8% projected budget deficit in 2024. 30% inefficiency in infrastructure projects leads to wasteful investments.",
                        stats: {
                            budgetDeficit: "2.8%",
                            inefficiencyRate: "30%"
                        }
                    }
                ]
            }
        ]
    },
    us: {
        title: "United States Market Analysis",
        subtitle: "Current Trends and Future Outlook",
        sections: [
            {
                title: "Political Factors",
                items: [
                    {
                        title: "Government Efficiency & Bureaucracy Reduction",
                        content: "Proposed 'Department of Government Efficiency' aims to cut $2 trillion in federal spending. Plans to fire 75% of federal workforce (2 million employees).",
                        stats: {
                            plannedCuts: "$2T",
                            workforceReduction: "75%"
                        }
                    },
                    {
                        title: "Trade War 2.0",
                        content: "Proposed tariffs of 60% on Chinese goods, and 200% if China threatens Taiwan. Past effects: 50% drop in exports, 300,000 job losses in agriculture & manufacturing.",
                        stats: {
                            baseTariff: "60%",
                            escalatedTariff: "200%",
                            jobLosses: 300000
                        }
                    }
                ]
            },
            {
                title: "Economic Factors",
                items: [
                    {
                        title: "Post-Election Financial Market Boom",
                        content: "Stock market surge post-election: JP Morgan +11.5%, Bitcoin reached $76,480, Tesla +18%, Google +6.5%. Decline in renewable energy stocks: First Solar -10.1%, Enphase Energy -16.8%.",
                        stats: {
                            jpMorganGain: "11.5%",
                            bitcoinPrice: 76480,
                            teslaGain: "18%"
                        }
                    },
                    {
                        title: "Frozen Housing Market",
                        content: "30-year mortgage rates surged from 2.65% (2021) to 7.8% (Oct 2023). Lowest home turnover rate in 30 years – only 2.5% of homes sold in 2024.",
                        stats: {
                            mortgageRate2021: "2.65%",
                            mortgageRate2023: "7.8%",
                            turnoverRate: "2.5%"
                        }
                    }
                ]
            }
        ]
    },
    mexico: {
        title: "Mexican Market Analysis",
        subtitle: "Economic Trends and Development",
        sections: [
            {
                title: "Political Factors",
                items: [
                    {
                        title: "Expansion of Presidential Power",
                        content: "State of exception declared March 2022, suspending constitutional rights. Mass arrests (70,000+ detainees). Public approval rating 85%+ due to reduced crime.",
                        stats: {
                            detainees: 70000,
                            approvalRating: "85%",
                            year: 2022
                        }
                    },
                    {
                        title: "Public Finance Transparency",
                        content: "$1.6 billion in loans from Central American Bank for Economic Integration since 2021. $890 million allocated for security & defense (2022).",
                        stats: {
                            loans: 1.6,
                            securityBudget: 890,
                            transparencyScore: "31/100"
                        }
                    }
                ]
            },
            {
                title: "Economic Factors",
                items: [
                    {
                        title: "Remittances Impact",
                        content: "20% of GDP comes from remittances, totaling $7.7 billion annually. 70% of households rely on remittances for financial stability.",
                        stats: {
                            gdpShare: "20%",
                            totalRemittances: 7.7,
                            householdDependence: "70%"
                        }
                    },
                    {
                        title: "Bitcoin Experiment",
                        content: "Legalized Bitcoin in 2021, but only 20% of businesses accept it. National Bitcoin losses over $60 million due to price volatility.",
                        stats: {
                            adoption: "20%",
                            losses: 60,
                            investment: 374
                        }
                    }
                ]
            }
        ]
    }
} ;
  showRegion(region: any) {
    const content = this.regionData[region];
    const container: any = document.getElementById('contentContainer');
    const regionContent:any = document.getElementById('regionContent');
    
    regionContent.classList.remove('hidden');
    
    let html = `
        <h2 class="text-3xl font-bold text-blue-900 mb-8">${content.title}</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
    `;
    
    content.sections.forEach((section: any) => {
        html += `
            <div class="factor-section bg-white rounded-lg shadow-lg p-6">
                <h3 class="text-xl font-bold text-blue-900 mb-4">${section.title}</h3>
                <div class="space-y-4">
                    ${section.items.map((item: any) => `
                        <div>
                            <h4 class="font-semibold text-blue-800">${item.title}</h4>
                            <p class="text-gray-600">${item.content}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    
    container.innerHTML = html;
    regionContent.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMobileMenu() {
      const menu:any = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
  }
}
