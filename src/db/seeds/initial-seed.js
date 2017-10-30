exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('class_codes').del()
    .then(function () {
      // Inserts seed entries
      return knex('class_codes').insert([
        {code: 'TEST', value: 'test code'},
        {code: 'AZGIL20171016', value: 'Arizona - Gilbert - Oct 17 FSF'},
        {code: 'CSF20170801FSF', value: ''},
        {code: 'CWCL20170710FSF', value: 'Cleveland - Apr 17'},
        {code: 'GT042417', value: 'Atlanta - Apr 17'},
        {code: 'GW0801', value: 'Arlington - Aug 17'},
        {code: 'HOU06062017', value: 'Houston - Jun 17'},
        {code: 'NW20170815', value: 'Northwestern - Aug 17'},
        {code: 'NWCHI20170911FSF-FT', value: 'Chicago - Sep 17 FT'},
        {code: 'SMDA20170718FSF', value: 'SMU - Jul 17'},
        {code: 'SMU20170417', value: 'SMU - April 17'},
        {code: 'UCB20170711FSF', value: 'Berkeley - SF - Jul 17'},
        {code: 'UCBER201710FSF1-FT', value: 'Berkeley - SF - Oct 17 FSF FT'},
        {code: 'UCBSAN201709FSF3-FT', value: 'UC Berkeley - SF - Sep 17 FSF FT'},
        {code: 'UCI20170313FSF', value: 'Irvine - Mar 17'},
        {code: 'UCIRV20170613FSF', value: 'Irvine - Jun 17'},
        {code: 'UCIRV20170925FSF', value: 'Irvine - Sep 17 FSF'},
        {code: 'UCLA201708FSF', value: 'UCLA - Aug 17'},
        {code: 'UCSD20170807FSF-FT', value: 'UC San Diego - La Jolla - Aug 17 FSF FT'},
        {code: 'UDEN20170724FSF', value: 'Denver - Jul 17'},
        {code: 'UKED20170912FSF', value: 'Kansas - Sep 17 FSF'}
      ]);
    });
};
