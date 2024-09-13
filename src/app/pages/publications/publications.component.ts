
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
      author: 'Видясова Л.А.',
      title: 'Основные направления исследования социального самочувствия: по результатам анализа зарубежного исследовательского опыта',
      conference: 'XVII Ковалевские чтения. Российское общество сегодня: институты, ценности, процессы: сборник материалов конференции',
      year: 2023
    },
    {
      author: 'Видясова Л.А., Якубова М. Ю.',
      title: 'Перспективы развития подходов к оценке социального самочувствия: результаты наукометрического анализа',
      conference: 'Государство и граждане в электронной среде // Труды XXVI Международной объединённой научной конференции «Интернет и современное общество». Сборник научных трудов, Выпуск 7. С.71-81',
      year: 2023
    },
    {
      author: 'Видясова Л.А., Якубова М. Ю.',
      title: 'Использование цифровых государственных сервисов как фактор социального самочувствия: на примере Санкт-Петербурга',
      conference: 'Информационная безопасность регионов России. XIII Санкт-Петербургская межрегиональная конференция: Материалы конференции, С. 322-324',
      year: 2023
    },
    {
      author: 'Л. Рванова, С.В. Ковальчук',
      title: 'Automatic Structuring of Topics for Natural Language Generation in Community Question Answering in Programming Domain',
      conference: 'Lecture Notes in Computer Science, Computational Science – ICCS 2023, Springer, Lecture Notes in Computer Science, vol 14074, P. 322-329',
      year: 2023,
      link: 'https://doi.org/10.1007/978-3-031-36021-3_33'
    },
    {
      author: 'Чижик А.В.',
      title: 'Специфика анализа текстовых данных из социальных медиа при оценке социального самочувствия жителей мегаполиса',
      conference: 'International Journal of Open Information Technologies',
      year: 2023
    },
    {
      author: 'Чижик А.В.',
      title: 'Анализ характера коммуникации пользователей в новостных пабликах социальной сети ВКонтакте',
      conference: 'Коммуникации в условиях цифровых изменений: сборник материалов VII Международной научно-практической конференции. Санкт-Петербург / под ред. проф. А.Д. Кривоносова, С.43-45',
      year: 2023
    },
    {
      author: 'Чижик А.В.',
      title: 'Сравнение моделей векторизации текстов для задачи анализа тональности коротких сообщений из социальных сетей',
      conference: 'Компьютерная лингвистика и вычислительные онтологии // Труды XXVI Международной объединённой научной конференции «Интернет и современное общество». Сборник научных трудов, Выпуск 7, С. 81-89',
      year: 2023
    },
    {
      author: 'Чижик А.В., Егоров М.П., Видясова Л.А.',
      title: 'Expanding the concept of preventive medicine through the using explaining machine learning models in remote clinic-patient interaction',
      conference: 'ACM, New York, NY, USA, Proceedings of the 16th International Conference on Theory and Practice of Electronic Governance (ICEGOV \'23). Association for Computing Machinery, USA. 2023. – P. 454–456',
      year: 2023,
      link: 'https://doi.org/10.1145/3614321.3614393'
    },
    {
      author: 'Чижик А.В., Егоров М.П., Видясова Л.А.',
      title: 'Mapping urban emotions based on social networks data for detecting factors of well-being dynamics',
      conference: 'ACM, New York, NY, USA, Proceedings of the 16th International Conference on Theory and Practice of Electronic Governance (ICEGOV \'23). Association for Computing Machinery, USA. 2023. – P. 464–466',
      year: 2023,
      link: 'https://doi.org/10.1145/3614321.3614394'
    },
    {
      author: 'Чижик А.В., Садохин А.П.',
      title: 'Статика и динамика социального пространства в процессе смены социальных настроений (на примере жителей Санкт-Петербурга)',
      conference: 'Культура и цивилизация, Том 13, № 9A, С.232-244',
      year: 2023
    }
  ];
}
