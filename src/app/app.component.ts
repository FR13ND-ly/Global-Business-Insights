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
                      content: "17% increase in violent crime (2021-2023), with 28% rise in crimes committed by minors. Oslo recorded 10,243 crimes in 2023, including 9 shootings in summer 2024.",
                      stats: { crimeIncrease: "17%", youthCrime: "28%", totalCrimes: 10243 }
                  },
                  {
                      title: "Strikes Due to Wage Inequality",
                      content: "20,000 workers went on strike (April 2023) across transport, construction, and hospitality. Gini index increased from 25% to 28% (2021-2022).",
                      stats: { strikingWorkers: 20000, giniIndexIncrease: "3%" }
                  }
              ]
          },
          {
              title: "Economic Factors",
              items: [
                  {
                      title: "Record Seafood Exports",
                      content: "13,000 new jobs added in 2023, with 106,000 people employed in the fishing industry. Norway's seafood industry accounts for 15% of exports, with NOK 122.5 billion in salmon sales (up 16%).",
                      stats: { newJobs: 13000, totalEmployed: 106000, exportShare: "15%", salmonSales: 122.5 }
                  }
              ]
          },
          {
              title: "Social Factors",
              items: [
                  {
                      title: "Declining Fertility Rate",
                      content: "Total Fertility Rate (TFR) fell from 2.0 (2009) to 1.41 (2022), lowest recorded in Norway’s history.",
                      stats: { fertilityRate: "1.41", year: 2022 }
                  }
              ]
          },
          {
              title: "Technological Factors",
              items: [
                  {
                      title: "Offshore Wind Energy Leadership",
                      content: "Largest offshore wind farm in the world (2023), reducing 200,000 tons of CO2 annually.",
                      stats: { co2Reduction: "200,000 tons", year: 2023 }
                  }
              ]
          },
          {
              title: "Legal Factors",
              items: [
                  {
                      title: "Indigenous Rights Violations",
                      content: "2021 Supreme Court ruling declared wind turbines violated Sámi land rights. Despite ruling, government failed to dismantle turbines.",
                      stats: { rulingYear: 2021 }
                  }
              ]
          },
          {
              title: "Environmental Factors",
              items: [
                  {
                      title: "Norway’s EV Market Dominance",
                      content: "96.4% of car sales in Norway are EVs, with a goal to reach 100% by 2025.",
                      stats: { evMarketShare: "96.4%", goalYear: 2025 }
                  }
              ]
          }
        ]
    },
    asia: {
      title: "Asian Market Analysis",
      subtitle: "Focus on South Korean Economic Developments",
      sections: [
          {
              title: "Political Factors",
              items: [
                  {
                      title: "Technology Industry Reform",
                      content: "South Korea passed the 'Chips Act' providing $260 billion in semiconductor industry support through 2027. Samsung and SK Hynix received tax credits worth 15% of facility investments. Government aims to secure 10% global AI chip market share by 2030.",
                      stats: { investment: 260, taxCredit: "15%", marketShareTarget: "10%" }
                  },
                  {
                      title: "Corporate Governance Changes",
                      content: "New regulations require 40% independent board members for large conglomerates. 72% of top 50 chaebols have restructured leadership. Corporate transparency index improved from 68 to 75 (2022-2023).",
                      stats: { independentDirectors: "40%", chaebolCompliance: "72%", transparencyScore: 75 }
                  }
              ]
          },
          {
              title: "Economic Factors",
              items: [
                  {
                      title: "Digital Currency Initiative",
                      content: "Bank of Korea launched CBDC pilot with 100,000 participants. Digital won tested for offline payments and cross-border transactions. 83% of merchants in test regions adopted the system.",
                      stats: { participants: 100000, merchantAdoption: "83%", transactionVolume: "5.2B" }
                  },
                  {
                      title: "Green Energy Transition",
                      content: "Renewable energy investment reached $30.2 billion in 2023. Offshore wind capacity increased by 165%. Government mandated 40% renewable energy use for industrial complexes by 2025.",
                      stats: { investment: 30.2, windCapacityGrowth: "165%", renewableTarget: "40%" }
                  }
              ]
          },
          {
              title: "Social Factors",
              items: [
                  {
                      title: "Aging Population Impact",
                      content: "Pension system reform introduced as population over 65 reaches 17.8%. Healthcare spending projected to increase by 42% by 2030. Workforce shrinking by 2.1% annually.",
                      stats: { elderlyPopulation: "17.8%", healthcareIncrease: "42%", workforceDecline: "2.1%" }
                  },
                  {
                      title: "Workforce Gender Imbalance",
                      content: "Women in South Korea earn 31% less than men. Female workforce participation is 62%, compared to the OECD average of 69%.",
                      stats: { genderPayGap: "31%", femaleParticipation: "62%", oecdAvg: "69%" }
                  }
              ]
          },
          {
              title: "Technological Factors",
              items: [
                  {
                      title: "5G Expansion & AI Adoption",
                      content: "South Korea leads 5G deployment with 95% national coverage. AI adoption in financial services increased by 78% in 2023.",
                      stats: { coverage: "95%", aiGrowth: "78%" }
                  },
                  {
                      title: "EV Battery Manufacturing Growth",
                      content: "South Korea controls 32% of the global EV battery market. LG Energy Solutions expanded operations by 12% in 2023.",
                      stats: { batteryMarketShare: "32%", lgExpansion: "12%" }
                  }
              ]
          },
          {
              title: "Legal Factors",
              items: [
                  {
                      title: "Strengthened Data Privacy Laws",
                      content: "Revised Personal Information Protection Act imposes fines up to $10 million for breaches. Companies must disclose cybersecurity measures.",
                      stats: { maxFine: "10M", complianceRequirement: "Mandatory" }
                  },
                  {
                      title: "Stricter Foreign Business Regulations",
                      content: "New FDI rules require government approval for acquisitions exceeding $50 million in strategic sectors.",
                      stats: { fdiApprovalThreshold: "50M" }
                  }
              ]
          },
          {
              title: "Environmental Factors",
              items: [
                  {
                      title: "Severe Air Pollution Challenges",
                      content: "PM2.5 pollution levels exceeded WHO limits by 240% in Seoul in 2023. Government introduced emergency action plans to cut emissions by 30% by 2027.",
                      stats: { pollutionLevel: "240% above WHO", reductionGoal: "30%", deadline: 2027 }
                  },
                  {
                      title: "Waste Management & Circular Economy",
                      content: "South Korea recycles 86% of its plastic waste. Food waste recycling programs reduced landfill use by 64%.",
                      stats: { plasticRecycling: "86%", landfillReduction: "64%" }
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
                    content: "Botswana's political stability was disrupted by the 2024 elections, ending the 58-year rule of the Botswana Democratic Party (BDP). The new ruling party, Umbrella for Democratic Change (UDC), focuses on economic diversification and social reform.",
                    stats: { previousRulePeriod: 58, year: 2024 }
                },
                {
                    title: "Challenges in Public Governance",
                    content: "Botswana slipped in the Corruption Perceptions Index, falling from 33rd place in 2010 to 45th in 2021. 8 out of 10 citizens believe corruption worsened under the 2008-2018 presidency.",
                    stats: { corruptionRank2010: 33, corruptionRank2021: 45, publicPerception: "80%" }
                }
            ]
        },
        {
            title: "Economic Factors",
            items: [
                {
                    title: "Dependence on Diamonds",
                    content: "80% of Botswana's foreign earnings come from diamonds, but industry revenues fell by 52% in 2024 due to competition from lab-grown diamonds (15-20% global market share).",
                    stats: { diamondEarnings: "80%", revenueDrop: "52%", labGrownShare: "15-20%" }
                },
                {
                    title: "Growing Public Debt",
                    content: "Government spending has grown unsustainably, leading to a 2.8% projected budget deficit in 2024. Infrastructure inefficiency (30%) contributes to wasteful investments.",
                    stats: { budgetDeficit: "2.8%", inefficiencyRate: "30%" }
                }
            ]
        },
        {
            title: "Social Factors",
            items: [
                {
                    title: "HIV Transmission Crisis",
                    content: "Botswana has the 3rd highest HIV prevalence in the world. 24.8% of adults (15-49 years) are infected, with 15,000+ new cases reported annually.",
                    stats: { prevalenceRate: "24.8%", newCases: "15,000+" }
                },
                {
                    title: "Youth Unemployment",
                    content: "Youth unemployment stands at 45.41%, among the highest in Africa. Despite 92% of young Batswana completing secondary education, 60% struggle to find jobs.",
                    stats: { youthUnemployment: "45.41%", secondaryCompletion: "92%", employmentStruggle: "60%" }
                }
            ]
        },
        {
            title: "Technological Factors",
            items: [
                {
                    title: "Innovation and Digital Growth",
                    content: "Botswana ranked as Africa’s 4th most innovative economy, with internet penetration at 72% in urban areas and 30% in rural areas.",
                    stats: { innovationRank: 4, urbanInternet: "72%", ruralInternet: "30%" }
                },
                {
                    title: "Smart Agriculture & IoT",
                    content: "Botswana introduced smart farming technologies, reducing livestock mortality by 8% and increasing crop yields by 12% over 5 years.",
                    stats: { livestockMortalityDrop: "8%", yieldIncrease: "12%" }
                }
            ]
        },
        {
            title: "Legal Factors",
            items: [
                {
                    title: "Trade Barriers & Import Restrictions",
                    content: "Botswana’s maize import ban (2023) caused a $33.9M loss for South African exporters. Seasonal tariffs persist despite Southern African Customs Union (SACU) agreements.",
                    stats: { lossToSA: "33.9M", tariffStatus: "Seasonal" }
                },
                {
                    title: "Weak Labor Law Enforcement",
                    content: "Botswana's informal economy, which contributes 20-25% of GDP, lacks worker protections. Many domestic workers receive no official contracts or benefits.",
                    stats: { informalSectorGDP: "20-25%", workerProtection: "Weak" }
                }
            ]
        },
        {
            title: "Environmental Factors",
            items: [
                {
                    title: "Biodiversity Leadership",
                    content: "Botswana is home to 130,000 elephants, the largest population in the world. 40% of the land is protected as national parks or reserves.",
                    stats: { elephantPopulation: 130000, protectedLand: "40%" }
                },
                {
                    title: "Climate Change Struggles",
                    content: "75% of Botswana’s land faces extreme drought risk. Groundwater supplies 70% of the country’s water needs, but depletion is a growing concern.",
                    stats: { droughtRisk: "75%", groundwaterDependence: "70%" }
                }
            ]
        }
    ]
},
usa: {
    title: "Artificial Intelligence Impact Analysis - USA Business Environment",
    subtitle: "Technological-Resource Factor Analysis 2021-2024",
    sections: [
        {
            title: "Current AI Integration Status",
            items: [
                {
                    title: "Enterprise AI Adoption",
                    content: "35% of US enterprises have implemented AI solutions across core business processes. Healthcare leads adoption at 42%, followed by financial services at 39%. Small businesses show 15% adoption rate.",
                    stats: { enterpriseAdoption: "35%", healthcareAdoption: "42%", smallBusinessAdoption: "15%" }
                },
                {
                    title: "AI Investment Scale",
                    content: "US private AI investment reached $124 billion in 2023. Federal AI research funding increased to $2.7 billion. Defense-related AI spending at $15.8 billion annually.",
                    stats: { privateInvestment: 124000000000, federalFunding: 2700000000, defenseSpending: 15800000000 }
                },
                {
                    title: "Workforce Impact",
                    content: "12.3 million jobs affected by AI integration. 2.1 million new AI-related positions created. 45% of companies report skills gap in AI expertise.",
                    stats: { jobsAffected: 12300000, newPositions: 2100000, skillsGap: "45%" }
                },
                {
                    title: "Economic Contribution",
                    content: "AI technologies contributed $1.1 trillion to US GDP. Productivity gains from AI implementation averaged 15.4%. Cost savings through AI automation reached 23%.",
                    stats: { gdpContribution: 1100000000000, productivityGain: "15.4%", costSavings: "23%" }
                },
                {
                    title: "Research & Development",
                    content: "7,852 AI patents filed in 2023. University AI research programs increased by 156%. Corporate AI labs grew by 89%.",
                    stats: { patents: 7852, universityPrograms: "156%", corporateLabs: "89%" }
                },
                {
                    title: "Infrastructure Development",
                    content: "Cloud AI computing capacity increased by 245%. AI-specific data centers grew by 67%. Edge AI computing adoption up 112%.",
                    stats: { computingGrowth: "245%", dataCenterGrowth: "67%", edgeAdoption: "112%" }
                }
            ]
        },
        {
            title: "Business Environment Impact",
            items: [
                {
                    title: "Competitive Landscape",
                    content: "78% of Fortune 500 companies using AI for competitive advantage. Market concentration in AI services increased by 34%. New AI startups grew by 156%.",
                    stats: { fortuneAdoption: "78%", marketConcentration: "34%", startupGrowth: "156%" }
                },
                {
                    title: "Industry Transformation",
                    content: "15 major industries significantly disrupted by AI. Average industry productivity increase of 18.7%. Digital transformation accelerated by 3.2 years.",
                    stats: { industriesDisrupted: 15, productivityIncrease: "18.7%", transformationAcceleration: 3.2 }
                },
                {
                    title: "Resource Allocation",
                    content: "42% of IT budgets allocated to AI initiatives. Human resource reallocation affected 23% of workforce. Training investment increased by 89%.",
                    stats: { itBudget: "42%", workforceReallocation: "23%", trainingIncrease: "89%" }
                },
                {
                    title: "Market Structure",
                    content: "AI services market grew to $62 billion. Cross-industry AI applications increased by 145%. Specialized AI solutions market up 234%.",
                    stats: { marketSize: 62000000000, crossIndustryGrowth: "145%", specializedGrowth: "234%" }
                },
                {
                    title: "Innovation Dynamics",
                    content: "AI-driven innovation increased R&D efficiency by 34%. New product development cycles reduced by 45%. Innovation success rate up 28%.",
                    stats: { rdEfficiency: "34%", developmentReduction: "45%", successRate: "28%" }
                },
                {
                    title: "Strategic Adaptation",
                    content: "89% of businesses revised strategies for AI integration. Strategic partnerships increased by 167%. Technology investment horizons extended by 2.8 years.",
                    stats: { strategyRevision: "89%", partnershipGrowth: "167%", investmentHorizon: 2.8 }
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
          content:
            "State of exception declared March 2022, suspending constitutional rights. Mass arrests (70,000+ detainees). Public approval rating 85%+ due to reduced crime.",
          stats: {
            detainees: 70000,
            approvalRating: "85%",
            year: 2022
          }
        },
        {
          title: "Public Finance Transparency",
          content:
            "$1.6 billion in loans from the Central American Bank for Economic Integration since 2021. $890 million allocated for security & defense (2022).",
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
          content:
            "20% of GDP comes from remittances, totaling $7.7 billion annually. 70% of households rely on remittances for financial stability.",
          stats: {
            gdpShare: "20%",
            totalRemittances: 7.7,
            householdDependence: "70%"
          }
        },
        {
          title: "Bitcoin Experiment",
          content:
            "Legalized Bitcoin in 2021, but only 20% of businesses accept it. National Bitcoin losses exceed $60 million due to price volatility.",
          stats: {
            adoption: "20%",
            losses: 60,
            investment: 374
          }
        }
      ]
    },
    {
      title: "Social Factors",
      items: [
        {
          title: "Socioeconomic Disparities and Urban-Rural Divide",
          content:
            "Income inequality remains a challenge, with urban areas experiencing a 35% higher standard of living than rural regions. Approximately 25% of the population lives below the poverty line.",
          stats: {
            incomeGap: "35%",
            povertyRate: "25%"
          }
        },
        {
          title: "Migration and Demographic Shifts",
          content:
            "Internal migration from rural areas to urban centers surged by 15% since 2020, influencing local labor markets and cultural dynamics.",
          stats: {
            migrationIncrease: "15%"
          }
        }
      ]
    },
    {
      title: "Technological Factors",
      items: [
        {
          title: "Digital Transformation in Public Services",
          content:
            "Government agencies have digitized 40% of their services, improving efficiency and accessibility while highlighting the need for enhanced cybersecurity measures.",
          stats: {
            digitizationRate: "40%"
          }
        },
        {
          title: "Rise of Fintech and Mobile Banking",
          content:
            "Fintech companies have grown by 50% since 2022, with mobile banking reaching 60% penetration in major cities, transforming the financial landscape.",
          stats: {
            fintechGrowth: "50%",
            mobileBankingPenetration: "60%"
          }
        }
      ]
    },
    {
      title: "Legal Factors",
      items: [
        {
          title: "Judicial Reforms and Anti-Corruption Measures",
          content:
            "Recent judicial reforms aim to expedite case resolutions by 30% and implement stricter anti-corruption penalties to restore public trust.",
          stats: {
            caseResolutionImprovement: "30%",
            penaltyStrictness: "Increased"
          }
        },
        {
          title: "Labor Law Adjustments",
          content:
            "New labor laws introduced in 2023 have enhanced worker rights, though they have increased compliance costs for small and medium enterprises by 12%.",
          stats: {
            complianceCostIncrease: "12%"
          }
        }
      ]
    },
    {
      title: "Environmental Factors",
      items: [
        {
          title: "Air Quality Challenges in Urban Centers",
          content:
            "Major cities report a 40% increase in air pollutants compared to the previous decade, prompting local initiatives for greener transportation and industrial practices.",
          stats: {
            airPollutionIncrease: "40%"
          }
        },
        {
          title: "Renewable Energy Initiatives",
          content:
            "Mexico's investment in solar energy has grown by 70% since 2021, with a national target of reaching a 50% renewable energy mix by 2035.",
          stats: {
            solarInvestmentGrowth: "70%",
            renewableTarget: "50% by 2035"
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
  const regionContent: any = document.getElementById('regionContent');
  
  regionContent.classList.remove('hidden');
  
  let html = `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-2">${content.title}</h2>
              <p class="text-lg text-gray-600">${content.subtitle}</p>
          </header>
          
          <div class="grid grid-cols-1 gap-8">
  `;
  
  content.sections.forEach((section: any) => {
      html += `
          <section class="bg-white rounded-xl shadow-lg overflow-hidden">
              <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <h3 class="text-xl font-semibold text-gray-900">${section.title}</h3>
              </div>
              <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      `;
      
      section.items.forEach((item: any) => {
          html += `
              <div class="bg-gray-50 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">${item.title}</h4>
                  <p class="text-gray-600 mb-4">${item.content}</p>
                  
                  <div class="border-t border-gray-200 pt-4">
                      <div class="grid grid-cols-2 gap-4">
          `;
          
          // Add statistics with formatted values
          Object.entries(item.stats).forEach(([key, value]) => {
              const formattedKey = key
                  .replace(/([A-Z])/g, ' $1') // Add spaces before capital letters
                  .replace(/([0-9])/g, ' $1') // Add spaces before numbers
                  .toLowerCase()
                  .split(' ')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');

              let displayValue = value;
              // Format large numbers with commas and abbreviations
              if (typeof value === 'number' && value >= 1000000000) {
                  displayValue = `$${(value / 1000000000).toFixed(1)}B`;
              } else if (typeof value === 'number' && value >= 1000000) {
                  displayValue = `$${(value / 1000000).toFixed(1)}M`;
              } else if (typeof value === 'number' && value >= 1000) {
                  displayValue = value.toLocaleString();
              }

              html += `
                  <div class="text-sm">
                      <span class="text-gray-500">${formattedKey}:</span>
                      <span class="text-gray-900 font-medium ml-1">${displayValue}</span>
                  </div>
              `;
          });
          
          html += `
                      </div>
                  </div>
              </div>
          `;
      });
      
      html += `
              </div>
          </section>
      `;
  });
  
  html += `
          </div>
      </div>
  `;
  
  container.innerHTML = html;
  regionContent.scrollIntoView({ behavior: 'smooth' });
}

  toggleMobileMenu() {
      const menu:any = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
  }
}
