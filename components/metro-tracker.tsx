import React, { useEffect, useState } from "react"

import { Train, Clock, ChevronDown, ChevronUp } from "lucide-react"

export type StationKey =
  | "sachivalaya"
  | "gnlu"
  | "motera-stadium"
  | "APMC"
  | "old-high court"
  | "infocity"
  | "GIFT city"

export type DirectionKey = "to-apmc" | "to-sachivalaya-gift"

export const STATIONS: Record<
  StationKey,
  {
    label: string
    directions: Record<DirectionKey, string[]>
  }
> = {
  sachivalaya: {
    label: "Sachivalaya",
    directions: {
      "to-apmc": ["08:23", "09:02", "09:38", "10:16", "10:53", "11:28", "12:05", "12:37", "13:14", "13:50", "15:00", "15:58", "16:38", "17:14", "17:50", "18:30", "19:05", "19:39"],
      "to-sachivalaya-gift": ["08:59", "09:36", "10:11", "10:51", "11:26", "12:03", "12:35", "13:12", "13:48", "14:58", "15:56", "16:36", "17:12", "17:48", "18:22", "19:03", "19:37", "20:11"],
    },
  },
  gnlu: {
    label: "GNLU",
    directions: {
      "to-apmc": ["07:57", "08:36", "08:49", "09:28", "10:05", "10:16", "10:42", "11:19", "11:54", "12:31", "13:03", "13:40", "14:16", "14:35", "15:26", "15:45", "16:10", "16:24", "17:04", "17:24", "17:40", "18:16", "18:31", "18:56", "19:31", "20:05"],
      "to-sachivalaya-gift": ["07:41", "08:19", "08:32", "09:09", "09:44", "09:57", "10:24", "10:59", "11:36", "12:08", "12:45", "13:21", "13:57", "14:31", "15:07", "15:29", "15:53", "16:09", "16:45", "17:05", "17:21", "17:55", "18:11", "18:36", "19:10", "19:44"],
    },
  },
  "motera-stadium": {
    label: "Motera Stadium",
    directions: {
      "to-apmc": ["08:19", "08:58", "09:10", "09:53", "10:28", "10:38", "11:07", "11:40", "12:15", "12:52", "13:24", "14:01", "14:37", "14:56", "15:47", "16:06", "16:31", "16:45", "17:25", "17:45", "18:01", "18:37", "18:53", "19:17", "19:52", "20:26"],
      "to-sachivalaya-gift": ["07:22", "08:00", "08:13", "08:50", "09:25", "09:38", "10:05", "10:40", "11:17", "11:49", "12:26", "13:02", "13:38", "14:12", "14:48", "15:10", "15:33", "15:50", "16:26", "16:46", "17:02", "17:36", "17:52", "18:17", "18:51", "19:25"],
    },
  },
  APMC: {
    label: "APMC",
    directions: {
      "to-apmc": ["08:51", "09:33", "09:42", "10:24", "11:00", "11:10", "11:38", "12:12", "12:47", "13:24", "13:56", "14:33", "15:09", "15:28", "16:19", "16:38", "17:03", "17:17", "17:57", "18:17", "18:33", "19:09", "19:25", "19:49", "20:24", "20:58"],
      "to-sachivalaya-gift": ["06:49", "07:27", "07:41", "08:17", "08:52", "09:05", "09:32", "10:07", "10:42", "11:16", "11:52", "12:29", "13:04", "13:39", "14:15", "14:37", "15:00", "15:17", "15:53", "16:13", "16:29", "17:02", "17:19", "17:44", "18:18", "18:52"],
    },
  },
  "old-high court": {
    label: "Old High Court",
    directions: {
      "to-apmc": ["08:37", "09:16", "09:29", "10:11", "10:46", "10:56", "11:25", "11:59", "12:34", "13:11", "13:43", "14:20", "14:56", "15:15", "16:06", "16:25", "16:50", "17:04", "17:44", "18:04", "18:20", "18:56", "19:12", "19:36", "20:11", "20:45"],
      "to-sachivalaya-gift": ["07:03", "07:40", "07:54", "08:31", "09:06", "09:19", "09:46", "10:21", "10:57", "11:30", "12:06", "12:43", "13:19", "13:53", "14:29", "14:51", "15:14", "15:31", "16:07", "16:27", "16:43", "17:17", "17:33", "17:58", "18:32", "19:06"],
    },
  },
  infocity: {
    label: "Infocity",
    directions: {
      "to-apmc": ["08:37", "09:16", "09:52", "10:30", "11:07", "11:42", "12:19", "12:51", "13:28", "14:04", "14:23", "15:14", "15:33", "16:12", "16:52", "17:28", "18:04", "18:44", "19:19", "19:53"],
      "to-sachivalaya-gift": ["08:46", "09:23", "09:58", "10:38", "11:13", "11:50", "12:22", "12:59", "13:35", "14:11", "14:45", "15:21", "15:43", "16:23", "16:59", "17:35", "18:09", "18:50", "19:24", "19:58"],
    },
  },
  "GIFT city": {
    label: "GIFT City",
    directions: {
      "to-apmc": ["07:51", "08:30", "10:10", "16:04", "17:17", "18:25"],
      "to-sachivalaya-gift": ["07:49", "08:27", "10:05", "16:00", "17:13", "18:19"],
    },
  },
};

// export const MetroTracker = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [selectedDirection, setSelectedDirection] = useState<DirectionKey>("to-apmc");

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 30000);
//     return () => clearInterval(timer);
//   }, []);

//   const getCurrentTimeString = () => {
//     return currentTime.toTimeString().slice(0, 5);
//   };

//   const stationOrder = selectedDirection === "to-apmc" 
//     ? ["GIFT city", "infocity", "old-high court", "APMC", "motera-stadium", "gnlu", "sachivalaya"] as StationKey[]
//     : ["sachivalaya", "gnlu", "motera-stadium", "APMC", "old-high court", "infocity", "GIFT city"] as StationKey[];

//   const getTrainPositions = () => {
//     const currentTimeStr = getCurrentTimeString();
//     const positions: Array<{
//       trainId: string;
//       currentStationIndex: number;
//       progressInSegment: number;
//       departTime: string;
//       originStation: string;
//     }> = [];
//     const travelTime = 4;

//     Object.keys(STATIONS).forEach(stationKey => {
//       const station = STATIONS[stationKey as StationKey];
//       const times = station.directions[selectedDirection];

//       times.forEach((departTime, index) => {
//         if (departTime <= currentTimeStr) {
//           const [hours, minutes] = departTime.split(':').map(Number);
//           const departTimeMinutes = hours * 60 + minutes;
//           const [currentHours, currentMinutes] = currentTimeStr.split(':').map(Number);
//           const currentTimeMinutes = currentHours * 60 + currentMinutes;
          
//           const minutesSinceDeparture = currentTimeMinutes - departTimeMinutes;
//           const stationIndex = stationOrder.indexOf(stationKey as StationKey);
//           const stationsFromOrigin = Math.floor(minutesSinceDeparture / travelTime);
//           const currentStationIndex = stationIndex + (selectedDirection === "to-apmc" ? stationsFromOrigin : -stationsFromOrigin);
          
//           if (currentStationIndex >= 0 && currentStationIndex < stationOrder.length && minutesSinceDeparture < (stationOrder.length - stationIndex) * travelTime) {
//             const progressInSegment = (minutesSinceDeparture % travelTime) / travelTime;
//             positions.push({
//               trainId: `${stationKey}-${index}`,
//               currentStationIndex,
//               progressInSegment,
//               departTime,
//               originStation: stationKey,
//             });
//           }
//         }
//       });
//     });

//     return positions;
//   };

//   const trainPositions = getTrainPositions();

//   return (
//     <div className="w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="p-1.5 bg-white/20 rounded-lg">
//               <Train className="text-white" size={20} />
//             </div>
//             <div>
//               <h2 className="text-lg font-bold text-white">Live Metro</h2>
//               <p className="text-blue-100 text-xs">Real-time tracking</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-1 text-white bg-white/20 px-2 py-1 rounded-lg">
//             <Clock size={14} />
//             <span className="font-mono text-sm">{getCurrentTimeString()}</span>
//           </div>
//         </div>

//         {/* Direction Selector */}
//         <div className="flex gap-1 mt-3">
//           <button
//             onClick={() => setSelectedDirection("to-apmc")}
//             className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1 ${
//               selectedDirection === "to-apmc" 
//                 ? 'bg-white text-blue-600' 
//                 : 'bg-white/20 text-white'
//             }`}
//           >
//             <ChevronDown size={16} />
//             To APMC
//           </button>
//           <button
//             onClick={() => setSelectedDirection("to-sachivalaya-gift")}
//             className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1 ${
//               selectedDirection === "to-sachivalaya-gift" 
//                 ? 'bg-white text-blue-600' 
//                 : 'bg-white/20 text-white'
//             }`}
//           >
//             <ChevronUp size={16} />
//             To Sachivalaya/GIFT
//           </button>
//         </div>
//       </div>

//       {/* Metro Line */}
//       <div className="p-4">
//         <div className="relative">
//           {/* Track Line */}
//           <div className="absolute left-5 top-6 bottom-6 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
          
//           {/* Stations */}
//           <div className="space-y-6">
//             {stationOrder.map((stationKey, index) => {
//               const station = STATIONS[stationKey];
//               const trainsAtStation = trainPositions.filter(pos => 
//                 Math.floor(pos.currentStationIndex) === index && pos.progressInSegment < 0.1
//               );

//               return (
//                 <div key={stationKey} className="relative">
//                   {/* Station */}
//                   <div className="flex items-center">
//                     {/* Station Circle */}
//                     <div className={`relative z-20 w-10 h-10 rounded-full border-2 border-white shadow-md flex items-center justify-center ${
//                       stationKey === "GIFT city" ? 'bg-purple-500' :
//                       stationKey === "APMC" ? 'bg-red-500' : 'bg-blue-500'
//                     }`}>
//                       <div className="w-3 h-3 bg-white rounded-full"></div>
                      
//                       {/* Train at station indicator */}
//                       {trainsAtStation.length > 0 && (
//                         <div className="absolute -top-1 -right-1 z-30">
//                           <div className="bg-green-500 p-1 rounded-full animate-bounce shadow-lg">
//                             <Train size={8} className="text-white" />
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     {/* Station Info */}
//                     <div className="ml-3 flex-1 min-w-0">
//                       <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
//                         <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm truncate">{station.label}</h3>
                        
//                         {/* Active Trains */}
//                         {trainsAtStation.length > 0 && (
//                           <div className="flex flex-wrap gap-1 mt-1">
//                             {trainsAtStation.slice(0, 2).map(train => (
//                               <span key={train.trainId} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-0.5 rounded-full font-mono">
//                                 {train.departTime}
//                               </span>
//                             ))}
//                           </div>
//                         )}

//                         {/* Next Departure */}
//                         {(() => {
//                           const nextTrain = station.directions[selectedDirection].find(time => time > getCurrentTimeString());
//                           if (nextTrain && trainsAtStation.length === 0) {
//                             return (
//                               <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
//                                 Next: <span className="font-mono font-semibold">{nextTrain}</span>
//                               </div>
//                             );
//                           }
//                         })()}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Train Icons Between Stations */}
//                   {index < stationOrder.length - 1 && (
//                     <div className="absolute left-5 top-10 w-0.5 h-6 z-10">
//                       {trainPositions
//                         .filter(pos => 
//                           Math.floor(pos.currentStationIndex) === index && 
//                           pos.progressInSegment > 0.1 && pos.progressInSegment < 0.9
//                         )
//                         .map(train => (
//                           <div
//                             key={train.trainId}
//                             className="absolute z-30 transform -translate-x-1/2"
//                             style={{
//                               top: `${train.progressInSegment * 100}%`,
//                               left: '50%'
//                             }}
//                           >
//                             <div className="relative">
//                               <div className="bg-yellow-500 p-1.5 rounded-full shadow-lg animate-pulse border-2 border-white">
//                                 <Train size={10} className="text-white" />
//                               </div>
//                               <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 px-2 py-0.5 rounded text-xs font-mono whitespace-nowrap">
//                                 {train.departTime}
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Legend */}
//       <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 border-t dark:border-gray-700">
//         <div className="flex items-center justify-around text-xs">
//           <div className="flex items-center gap-1">
//             <div className="bg-green-500 p-1 rounded-full">
//               <Train size={8} className="text-white" />
//             </div>
//             <span className="text-gray-700 dark:text-gray-300">At Station</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <div className="bg-yellow-500 p-1 rounded-full">
//               <Train size={8} className="text-white" />
//             </div>
//             <span className="text-gray-700 dark:text-gray-300">In Transit</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
//             <span className="text-gray-700 dark:text-gray-300">Station</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// ... (keep your StationKey, DirectionKey, and STATIONS definitions the same)



// ... (keep your StationKey, DirectionKey, and STATIONS definitions the same)



export const MetroTracker = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedDirection, setSelectedDirection] =
    useState<DirectionKey>("to-apmc")

  // Refresh every 30s
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 30_000)
    return () => clearInterval(timer)
  }, [])

  const getCurrentTimeStr = () =>
    currentTime.toTimeString().slice(0, 5) // "HH:MM"

  // Direction-wise station order
  const stationOrder: StationKey[] =
    selectedDirection === "to-apmc"
      ? ["GIFT city", "infocity", "old-high court", "APMC", "motera-stadium", "gnlu", "sachivalaya"]
      : ["sachivalaya", "gnlu", "motera-stadium", "APMC", "old-high court", "infocity", "GIFT city"]

  /**
   * Find active trains based on current time
   * Assumption: average 4 minutes between stations
   */
  const getTrainPositions = () => {
    const travelTime = 4 // minutes per segment
    const currentMinutes =
      currentTime.getHours() * 60 + currentTime.getMinutes()

    const positions: Array<{
      trainId: string
      fromIndex: number
      toIndex: number
      progress: number // 0 → at fromIndex, 1 → at toIndex
      departTime: string
    }> = []

    // Only look at origin stations (first in direction)
    const originStation =
      selectedDirection === "to-apmc" ? "sachivalaya" : "APMC"

    const schedule = STATIONS[originStation].directions[selectedDirection]

    schedule.forEach((departTime, idx) => {
      const [h, m] = departTime.split(":").map(Number)
      const departMinutes = h * 60 + m

      if (departMinutes > currentMinutes) return // not yet departed

      const elapsed = currentMinutes - departMinutes
      const segment = Math.floor(elapsed / travelTime)
      const progress = (elapsed % travelTime) / travelTime

      const fromIndex =
        selectedDirection === "to-apmc" ? segment : stationOrder.length - 1 - segment
      const toIndex =
        selectedDirection === "to-apmc" ? fromIndex + 1 : fromIndex - 1

      if (fromIndex < 0 || toIndex >= stationOrder.length) return // already finished

      positions.push({
        trainId: `${originStation}-${idx}`,
        fromIndex,
        toIndex,
        progress,
        departTime,
      })
    })

    return positions
  }

  const trainPositions = getTrainPositions()

  return (
    <div className="w-full max-w-md mx-auto bg-gray-900 text-gray-100 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-white/20 rounded-lg">
              <Train className="text-white" size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold">Live Metro</h2>
              <p className="text-indigo-200 text-xs">Real-time tracking</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-white bg-white/20 px-2 py-1 rounded-lg font-mono text-sm">
            <Clock size={14} />
            {getCurrentTimeStr()}
          </div>
        </div>

        {/* Direction Selector */}
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => setSelectedDirection("to-apmc")}
            className={`flex-1 px-2 py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition-all ${
              selectedDirection === "to-apmc"
                ? "bg-white text-indigo-700"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            <ChevronDown size={14} /> To APMC
          </button>
          <button
            onClick={() => setSelectedDirection("to-sachivalaya-gift")}
            className={`flex-1 px-2 py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition-all ${
              selectedDirection === "to-sachivalaya-gift"
                ? "bg-white text-indigo-700"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            <ChevronUp size={14} /> To Sachivalaya / GIFT
          </button>
        </div>
      </div>

      {/* Metro Line */}
      <div className="p-4 relative">
        {/* Track Line */}
        <div className="absolute left-4 top-6 bottom-6 w-1.5 bg-gray-700 rounded-full"></div>

        <div className="space-y-6 relative z-10">
          {stationOrder.map((stationKey, index) => {
            const station = STATIONS[stationKey]

            // Trains exactly at this station
            const trainsHere = trainPositions.filter(
              (t) =>
                (t.fromIndex === index && t.progress < 0.05) ||
                (t.toIndex === index && t.progress > 0.95)
            )

            return (
              <div key={stationKey} className="relative">
                <div className="flex items-center">
                  {/* Station Node */}
                  <div
                    className={`relative z-10 w-6 h-6 rounded-full border-2 border-gray-900 shadow-md flex items-center justify-center ${
                      stationKey === "GIFT city"
                        ? "bg-purple-500"
                        : stationKey === "APMC"
                        ? "bg-red-500"
                        : "bg-blue-500"
                    }`}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Station Info */}
                  <div className="ml-3 flex-1 min-w-0">
                    <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                      <h3 className="font-semibold text-xs truncate">
                        {station.label}
                      </h3>

                      {/* Trains present */}
                      {trainsHere.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {trainsHere.map((train) => (
                            <span
                              key={train.trainId}
                              className="bg-green-600/20 text-green-300 text-[10px] px-1.5 py-0.5 rounded-full font-mono"
                            >
                              {train.departTime}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Trains in transit */}
                {index < stationOrder.length - 1 && (
                  <div className="absolute left-4 top-8 w-1.5 h-6">
                    {trainPositions
                      .filter(
                        (t) => t.fromIndex === index && t.progress > 0.05 && t.progress < 0.95
                      )
                      .map((train) => (
                        <div
                          key={train.trainId}
                          className="absolute z-40 transform -translate-x-1/2"
                          style={{
                            top: `${train.progress * 100}%`,
                            left: "50%",
                          }}
                        >
                          <div className="relative">
                            <div className="bg-yellow-500 p-1 rounded-full shadow-lg animate-pulse border-2 border-gray-900">
                              <Train size={8} className="text-white" />
                            </div>
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-900/80 border border-yellow-600 px-1.5 py-0.5 rounded text-[10px] font-mono whitespace-nowrap text-yellow-200">
                              {train.departTime}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


