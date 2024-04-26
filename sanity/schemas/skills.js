export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Id',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bgColor',
      title: 'BgColor',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  orderings: [
    {
      title: 'DESC',
      name: 'desc',
      by: [{field: 'id', direction: 'desc'}],
    },
    {
      title: 'ASC',
      name: 'asc',
      by: [{field: 'id', direction: 'asc'}],
    },
  ],
}
