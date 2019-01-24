/* eslint-disable no-unused-vars */
import Chance from 'chance';

const chance = new Chance();

export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('articles', [{
    slug: 'this-is-a-post-title-l78hgybf',
    title: 'This is a post title',
    description: 'Descriptive title',
    body: chance.sentence({ words: 200 }),
    userId: 1,
    isArchived: false,
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'this-is-the-second-post-title-mbjb7y',
    title: 'This is the second post title',
    description: 'Second descriptive title',
    body: chance.sentence({ words: 250 }),
    userId: 2,
    isArchived: false,
    isPublished: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'this-is-third-post-title-u87ddsa',
    title: 'This is the third post title',
    description: 'Third descriptive title',
    body: chance.sentence({ words: 300 }),
    userId: 3,
    isArchived: false,
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'this-is-third-pot-title-u87dda',
    title: chance.sentence({ words: 8 }),
    description: 'Third descriptive title',
    body: chance.sentence({ words: 350 }),
    userId: 4,
    isArchived: false,
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'this-is-trd-post-title-u87ddsa',
    title: chance.sentence({ words: 6 }),
    description: 'Third descriptive title',
    body: chance.sentence({ words: 500 }),
    userId: 5,
    isArchived: false,
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'what-a-wonderful-world-u87dda',
    title: chance.sentence({ words: 6 }),
    description: 'This describes a world that is wonderful',
    body: chance.sentence({ words: 400 }),
    userId: 1,
    isArchived: true,
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'what-a-wonderful-day-u87dsss',
    title: chance.sentence({ words: 10 }),
    description: 'Third descriptive title',
    body: chance.sentence({ words: 600 }),
    userId: 2,
    isArchived: false,
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'what-a-wonderful-world-ahead-u87cdaa',
    title: 'What a wonderful world title ahead',
    description: 'This describes a world that is wonderful',
    body: chance.sentence({ words: 700 }),
    userId: 1,
    isArchived: true,
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'what-a-wonderful-world-ahead-of-time-u87ddae',
    title: 'What a beautiful',
    description: 'This describes a world that is wonderful',
    body: chance.sentence({ words: 800 }),
    userId: 1,
    isArchived: true,
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'what-a-wonderful-day-fort-love-u87dsyths',
    title: 'what a wonderful day',
    description: 'Third descriptive title',
    body: chance.sentence({ words: 650 }),
    userId: 2,
    isArchived: false,
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'what-a-true-wonderful-world-ahead-u87ctga',
    title: 'What a wonderful world',
    description: 'This describes a world that is wonderful',
    body: chance.sentence({ words: 630 }),
    userId: 1,
    isArchived: true,
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'time-is-Great-for-you-u87dsyths',
    title: 'time is Great',
    description: 'Third descriptive title',
    body: chance.sentence({ words: 710 }),
    userId: 2,
    isArchived: false,
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'what-a-wonderful-world-ahead-of-you-u87ctga',
    title: 'What a wonderful world of you',
    description: 'This describes a world that is wonderful',
    body: chance.sentence({ words: 610 }),
    userId: 1,
    isArchived: true,
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'what-a-wonderful-time-to-be-alive-witth-God-u87dsyths',
    title: 'what a wonderful time to be alive',
    description: 'Third descriptive title',
    body: chance.sentence({ words: 900 }),
    userId: 2,
    isArchived: false,
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'What-a-wonderful-world-time-to-say-be-u87ctga',
    title: 'What a wonderful world time to say',
    description: 'This describes a world that is wonderful',
    body: chance.sentence({ words: 490 }),
    userId: 1,
    isArchived: true,
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'What-a-wonderful-world-time-to-say-hi-u87dsyths',
    title: 'What a wonderful world time to say hi',
    description: 'Third descriptive title',
    body: chance.sentence({ words: 610 }),
    userId: 2,
    isArchived: false,
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'What-a-wonderful-world-to-live-u87ctga',
    title: 'What a wonderful world to live',
    description: 'This describes a world that is wonderful',
    body: chance.sentence({ words: 450 }),
    userId: 1,
    isArchived: true,
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'hello-world-u87ddd',
    title: 'hello world',
    description: 'It so much fun to be alive',
    body: chance.sentence({ words: 730 }),
    userId: 3,
    isArchived: false,
    isPublished: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
