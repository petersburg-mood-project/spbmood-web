import { Component } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  standalone: true,
  imports: [],
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {
  publications = [
    {
      author: 'Чижик А. В., Садохин А. П.',
      title: 'Опыт анализа социального самочувствия горожан: соотнесение характеристик городской инфраструктуры здоровья и тональности текстов из социальных сетей (на примере Санкт-Петербурга)',
      journal: 'Вестник Новосибирского государственного университета. Серия: Лингвистика и межкультурная коммуникация',
      year: 2024,
      volume: 'Т. 22, № 1',
      pages: 'С. 50-64',
      doi: '10.25205/1818-7935-2024-22-1-50-64'
    },
    {
      author: 'Видясова Л. А.',
      title: 'Использование цифровых государственных сервисов как фактор социального самочувствия населения',
      journal: 'Вестник Санкт-Петербургского университета. Социология',
      year: 2024,
      volume: 'Т. 17, №. 1',
      pages: 'С. 84-99',
      doi: '10.21638/spbu12.2024.106'
    },
    {
      author: 'Chizhik A., Egorov M., Vidiasova L.',
      title: 'Expanding the concept of preventive medicine through the using explaining machine learning models in remote clinic-patient interaction',
      conference: 'Proceedings of the 16th International Conference on Theory and Practice of Electronic Governance',
      year: 2023,
      pages: 'P. 454-456',
      doi: '10.1145/3614321.3614393'
    },
    {
      author: 'Chizhik A., Vidiasova L., Egorov M.',
      title: 'Mapping urban emotions based on social networks data for detecting factors of well-being dynamics',
      conference: 'Proceedings of the 16th International Conference on Theory and Practice of Electronic Governance',
      year: 2023,
      pages: 'P. 464-466',
      doi: '10.1145/3614321.3614394'
    },
    {
      author: 'Чижик А. В., Садохин А. П.',
      title: 'Статика и динамика социального пространства в процессе смены социальных настроений (на примере жителей Санкт-Петербурга)',
      journal: 'Культура и цивилизация',
      year: 2023,
      volume: 'Т. 13, № 9-1',
      pages: 'С. 227-239',
      doi: '10.34670/AR.2023.98.84.027'
    },
    {
      author: 'Чижик, А. В.',
      title: 'Специфика анализа текстовых данных из социальных медиа при оценке социального самочувствия жителеzzzй мегаполиса (на примере Санкт-Петербурга)',
      journal: 'International Journal of Open Information Technologies',
      year: 2023,
      volume: 'Т. 11, № 12',
      pages: 'С. 83-91'
    }
  ];
}
