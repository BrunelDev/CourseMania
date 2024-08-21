import React from 'react';
import CourProgrammeM from '@/components/CourProgrammeM';
import TimelineMarkers from '@/components/calendartest';

function CalendarTimeline({ currentDate }) {
  const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  const hours = Array.from({ length: 12 }, (_, i) => `${i + 8}h`); // de 8h à 19h

  // Fonction pour obtenir la date d'un jour spécifique de la semaine actuelle
  const getDayDate = (currentDate, dayIndex) => {
    const monday = new Date(currentDate);
    const dayOfWeek = monday.getDay(); // 0: Dimanche, 1: Lundi, ..., 6: Samedi
    const diff = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek; // Traiter le dimanche comme la fin de la semaine
    monday.setDate(monday.getDate() + diff); // Déplacer au lundi
    const targetDate = new Date(monday);
    targetDate.setDate(monday.getDate() + dayIndex);
    return targetDate;
  };

  return (
    <div className="w-full h-full overflow-x-auto">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="p-2"></th>
            {days.map((day, index) => (
              <th key={index} className="p-2 text-center border-b border-gray-300">
                <div className="text-sm">{day}</div>
                <div className="text-xs text-gray-500">{getDayDate(currentDate, index).getDate()}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, index) => (
            <tr key={index}>
              <td className="p-2 text-right text-sm border-r border-gray-300 align-middle">{hour}</td>
              {days.map((_, dayIndex) => (
                <td key={dayIndex} className="p-2 border-b border-gray-300">
                  {/* Insérez ici le composant des cours programmés si nécessaire */}
                  {dayIndex === 1 && index === 2 ? (
                    <CourProgrammeM cour={{ name: "Cours 1", jourdebut: "Lun", jourfin: "Mar", timedebut: "10:00" }} />
                  ) : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <TimelineMarkers/>
    </div>
  );
}

export default CalendarTimeline;
