const data = [
  {
    name: "MTN Airtime Top up",
    imageURL:
      "https://seeklogo.com/images/M/mtn-logo-40644FC8B0-seeklogo.com.png",
    category: "Expense",
    type: "Airtime & Internet",
    date: "01/03/23",
    time: "10:34pm",
    amount: "10,000",
    refID: "1757369801",
    action: "View",
  },
  {
    name: "Khalid Orekoya",
    imageURL:
      "https://images.prismic.io/monito/f1aa6af4-cc37-4d13-8c0a-3bd1c497cbd3_Kudabank_Logo-10.png?auto=compress,format&rect=0,0,1500,1500&w=2400&h=2400",
    category: "Expense",
    type: "Salary",
    date: "01/03/23",
    time: "08:00am",
    amount: "200,000",
    refID: "1757369076",
    action: "View",
  },
  {
    name: "Tope Olubusayo",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/GTBank_logo.svg/1200px-GTBank_logo.svg.png",
    category: "Expense",
    type: "Salary",
    date: "01/03/23",
    time: "08:00am",
    amount: "200,000",
    refID: "1757369801",
    action: "View",
  },
  {
    name: "Bola Tinuola",
    imageURL:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/80/56/aa/8056aae6-54ff-7745-b620-531236602a2a/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png",
    category: "Expense",
    type: "Rent",
    date: "01/03/23",
    time: "10:34pm",
    amount: "300,000,00",
    refID: "1757369801",
    action: "View",
  },
  {
    name: "Esther Ogbonna",
    imageURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABNVBMVEX7AAX////8AAD3AADyAAD5AADvAAD9AAD1AAD4///uAAD8/////v/2///qAAD9AAX/+//x///s///3/P///fr/9v77//r8+//lAAD//Pj1+/31//n/9/r8ABD/+/v7//TmREPpP0Dx/fTy8eP48/LiZF3x6dvwpp7329XxBg7z3d/x8u367uj1NTLxycTxxMTztrfxp6rum57sioXreXXuZ2HsWVLyhYPr3MvsrabxXV70dWrqODf0fYX1T0j4wcPx1sv7eH7zGCXzkpXpGx36UVzwHyzyoI/5iYD5XFHnoZXji4r4QU70ZVz/MDnn6tn1zM3myb3tgYnxWGT0uK3l3NTkk5H1N0DggoPfJyLiiX3t1tvwa3P+0cz0LiPlXlX3p7D4l6Hfqp3fdHT+iIPvxbHsgnFxKM8BAAAT10lEQVR4nN2dC1/bNtuHFR1sybJsy07sJCYJBFpiEgIFCg2lLQVGDxvr2Gh5tnXd9uzdvv9HeGVoeFjAOccJ+W/d2v5KqgtJ90G6JYHM2OWUfS9bCLxi0eOCsdBv1DY2n2xt7zzdXVxcWlpaXNx9urO39WRzo9bIhoKJQKkYFLKez83xNweM/yP9wkKuKFXLw+Vnre39dcNAhoEx1HWdIkQQoupnOsaGQQ1jfX+79Ww5y5iQxWCh4I+/ORMgNJnr+o2NP58fYIWDKaEYKGGsXf0//qmGr39L8WIFTQ+eb71q+K7kwfibMy5CU40vznhG/ZNtvHrxMtIIgQTZINLQNZYObRugWMC2oX79mwhHwEaEIKJFL18oSvX1vvog0zTHNWDHRSj8LA8CT64cHu9aEBFof+0vu/2TBN38OYgsYu1uH64IZuY4F+GYWjYuwoUFj7vVjRcHGsKWhbpTJcGqvkTGwetm1eW8vDCmlo2LULr++esjghEsRTqAwwAig+pRCRJLP9o5L7jumFo2KqHJK2bZ5LJ2fIoxAiVACbbAkH0IqDJLAGgGpCfHNcnNchCOPB9HJWTFhZCxjW/yWDduptRQfLdIbRvrOP9N0w+ruSKbMmEmcOurp5oyLrh30/sXVMPdwqdvluXI/mNUQt7YO7KoEi6RMRIijGmJIi16+5hPi9ArVJwsW9tRpoHSq5E53ORLIPw61gmkO2si6/jloftyaEIuHbH2mtKhzOYAgpS+XhPO8KN1aELG6nsUa6UJAwJQMij6a5kNbXCGH6VbKtAsWWO1L/cKWyUVt6966RH6nPueuxFhXQVkozqGfqT+FlvN9Q0Z+CbPDOweBybMVsqcf3ynbB2iKeC1ISnG7z6qWK6QnTihyeTKe01T7j09wCtIyzDer4jBQ5zBCFVuw9nhIo67D6E0hugNoK2ySbzY5DzO0CZH6Je94reWniLZv6Vb/6kHQWWShOzjd2jSHrCbCLn8yCbZh3KVYKpN3kMkCWsUk1U5AULHVOPfkStnSIsj/6kRAhuWNHSWFTnBfO6MkdDkCzkpagfTHKBt2UA/PXQ9Z6HP0dofIVvg0ty0tGnTfZWBW6E0F/pbeuyTMOfWt6k2K4Qly9ipy1x/oWpvQjP2EWb90VRt6L9VsnW8v+zIrB/0DgB6E3KVm7HHl3h6FvQ+Iev7Dzwo+73nYh+jdEG4v50Y+hQt6D2iIB/V3GK5d5jaB2GZb+StlKPQ3tJ0w7jgwch9mAsLgbzAeLY6MJbKqRBuiaAQ9sj+exD6psdnEjBWSTda3Mv0CFN7EBa8akuFStNmSVAeGqtVXh6aUCXUmYCv5imgk+9DO1a8aKcmvErpr34Jrv9NXGLGFBBrlTs82y2A60bolx35xEpniFKigwjYBMV7ckhl9IgQFeNTBY27fYOJ0RJmwe8yF7sQZh3BL4xxrvN2ESa6TQg21h9929rcaP6wcfF+b//I0ijpsRYE1VwU5S4BXBfCcuA2MbFSwFMMuk6t6J9m3eecCSHk1Q/5+OK5YWDSZcUL5SG+cIMuczGB8CpdYr/l4XiXsu+Bi9tuAEjo03MR/8089LNZM6tUyJZVTFa4+A4aJLITmqHmEDKaXDKRNBcTCON0yXx8Yk18DsaEEdXyPz6Wufubwt3DnwyST156to3oQy7nJMXhCYRsoSiXL7VUJiFF+PmadMyE1N00hfvDEurSFDv//bL0kpKpJEKVLj3CehrRNiJLTeb52aQQ0/edXBC2Ij1pbcE2gLVbd3MJAVwCofDCna5WeixsVE1ybOwVMsqjsaRqITPDuG9m1r4x1Pf72mV2SvmUHekN1oeO29Imng/Gu9pUu+gvVefV1xgbVoJVhfi9GMzSsEM8eSsDMNRPngnW1zI2z4n3atoYCR+VJ4diIMLyqVWa+MaZTfSTj57n9bWiZAqZaeVJ4szJHxX6JuQVX55NPOFVbcXopDbQtqBoJVcL2Po7wcJ7vln3EJoBW52sm7+SBYnK0gfa2s2K9yQxz7HJKrtvKt7Xh95Hok1+ElJivOKD7Xv6ObaTTKiRj/el/HcIsyavf5eCH6QQf2KhM9AehF8u1r9L3PIqaZd1bt7xqncICyb7Nnk+j08Y7w5Vm/erlZQL6Ij8RwR+57DoJORlcWjByQ9SG0e1BPPeXXI7acnBxtBoiqDYg9DkK4s6KE2eUDtmQxWQmPX1hBGGIqofrJid1rmTMOTvU1m713/23aHqKytMJa3UvrcfbZt8KnaO/U5C76M2+d1rSCFsieHKnFSKfKAyggR3RvDHTo/RSei+TGNlDdOTjCgPVQTEyuKCoMSQUnvZmYR1Em4gY+Le3raotipEZShL4/heMa8nmUJq4c0uhEHAPJpGSoiRVleed6iqQ5MH7BhFCYRIBRKeLN7+5NuEZSk+qfxr8r5QN85Gqqms0VLyVILbvHg7CL9N6DvLOJ3Fw/zmSJW/1dPk8BRA43Fw257eJnTYXziNMgTb0uojHY4Rv3SbS3THv21P/9WHa8RIZYEb7jqDVYx0Eja7+Gwb419v+6HbhPJ1Shv15G1mpFHKG0mp/vXHf75tpW8TruHxlqMnCm5mhi4XjRW4613sBUZW7R5CR03OHTT5it8rkV8HTAzvEJ51Wz6N0GceL891EFa9NZxStQWkDaczAxhIWbHXzebbkNZEpW1t2oRhIN+mVU4CoxVzJH/IxHb30BLuyKA9F9uEXCxbqRGuL4iRCD32qbvfhlZDtm1Zm7DM3nS1T+MUPFgJRzrNxM3V7oQYv5HtDbc2oRkepVbzBNdXum3a9paf6UEI4FG9/YdvvMXfKQVs4JpwpD5UhD26A6GLTkL5XWqDFMCThT6qtboSfupRiV0yLm9bGjNccGt5mMrhiViQ1L2R/KHPt7v3oU1JviYXpHND6LjHOL3jEwQ1vBFH6fMeo5Qi+kIGVxt2V4Q8qJ+kshv6VWi05Ckjype9jAbSo4J3tQR+RWiaTYIgSWGz4lpka7SoTa70WGqhVNdQ0yu2+5AF8nVqhjQWeSpHitr8H/SkZYwb2doZu9o4v7KlvBqlsB/6P+lH9ZGGKdvCvQmtUvXKYMeEWbahp0oIjd9G8xYve1cs2wa88NqEmeLn9JxhLGpsDz0PTW6adSN5wfRGdv4n0bY0mZVTkmoVNzS+DH0nhOl5ooVR7+UWqp82bvrwEMN0i2Q10hyWkDtCrPfhu21Nx802Id9DUZq21NYw2h92IpqBaGq9ChZjkQi9uCI0fdNfRFGqZcAYUK3hDRebZov+7305bjsii1yFa8Av8IZF9LQLnfVHphju9hKv1ucBSE3Pr3mVAPgLcpOka2hiQaMmhloV9qq7fe5Qa1h/Iss+8AL3tWWnUSf7L9l4NxiKkF30Wa1FASXPZTEAWVE/QOmfF7EtY1Wamf4qvtoSOWk+HuCIIFmvBy4oyzVjGme2UD6qiaCPUz23ZLo57/MAUwpqjUCAQLyaxoER27CNxYbMDnRquZyTLYQGKIWhr1gGFPmfUzmbTSNCH/nOQHPRZxsYlgaYUvCYMRDIs+kcibFtbOxJr1Dpb1XK5GGZH9KBIhMbvxNFEFRPU8t87zSAbHNm9uf5OcvxD9GApyDpl7oHguX0cvs7MuheJam2t7MPc+75ERkwyaNo2QTmMzi1g1vKZeFHddWLvW4scYTJ5RNMDTBgPRo5NwFbnebhO1ujB7VisVztThjm3OBbTQeDXheDjGMJ2F4qBSZJsvNYWw2d7m7RDGVtEQ0ROxP8XAC2n9a+6H2yjfjU2sFh1wv2zMzCtkZp77WZux+PXvpgeqb0ug12vFMEz9Y4y1T8LBfXxy4cxzQdh/l+mMllKi2LoJKddPSpm9BJCEKc6j0z98oGunb2qi4c7hcKPve8IAzL2apfKHo59uENoMPGJJAYddBAU+3DtkpGfn3vWd1jPAg4V/9hjHNRXP7vPjbo8C0kqAE+EmMW7hKIlFVA5OjpjxePHzfqsrjSaBxuvb7ESNNsNHTJMtXIIXillWaBkFyd94WEIBgdfX95eRTR+BLbuPvQ8JtimOJN8MQAs0B4S/CrxvBRGOA/wBYBU/QWExbF6E9wDOeYEGjoR7CDhrbFsy8doUfgEUmrFGoK0jH5HeymvKCfqnQMX4KXaW5vpy0b6wdgGkuJqYlC+DNYn2dCBOEJWKcTvjVhqiK6IiTzTAgV4c+pVmGkratROs99iIgiPCAjpF+zLhoTvoQpHImdlq78oYpp5jguxfpL8HSe41KIyW6cW8yvNSWYPJ3v/LCEyYv5zvFLJfIneKLN2jrNGIVL9A+wORtrbZMRBnhzVtZLJyMb4SZozHFIA2xCG6Cawg0DUxOlKATVkxRfcUhbmEYh8HfTL2pLTYgu+YDv3HsF2nyI4KcMsK30jnSlLmJsS8DPp1eLMXnhTQnM5Tn2FsCoMVCsf5njURrVOSiKd3NsS1+6K0Cw4znOgPd4FXD2an4tDd1kPhBeY/L3eE5JEDcCDtyg3u2SiQcs2yZf3AUJgqJ8Sugc7s5QHZKnoWcCvyw3dTwr76uMU5jqq1KYIKh4a3l9Hgk1aNUC3wNOaGYX4eBlfzMvOyJLZcfn7bNr027P+AVL+HVc5nh1/vAcJ17x9nBlI+vm/GGmcaLP4ZopPmq0T8ly+VN+7roQ2Pnf+c2NA7I1h3k+oavuzb0Ysh7N3zxE2prbvlMhKzJnZP4I34mgfaeCWfSaEMPZKIcejzCAdFM47T7kAVu29Jl982gI2djQ8bLDbm5vYYF8gWbs6biRZFOKP7u5sE3oyAVZM8hcre5Dq+kV/RuPryQvjTmqybCp9X3njXSZi7lyiRS1Mh2EvB7N01oGMVZ4B6Hp/ZLuDS4TVcn6x8t2EPrsY2r3Jk5eKvcVlU5C7j6fnwWp+DKFQgchr7AahXNiTSFusjv3l3I/w/bJXKT6VEO7InPnDtpYTW2qB2bHJNtCxu0bjG4Tss/zMRPRPksg9H9F83C6hGjNJMKyeDoHhLa2K8sJhBXv8Rz4RGh8yFUTCLOcvX349cJwR5hJfcgq7golD3yThqAVWUl63yLWf0mUzusBE5GtReh9B9Gdt4IO8ANedrM1bb3XW0FmU3vA9tTWjGbnbTedhL7c6+fKvtmUbdMdt/N9njuEufo6pNFDXFhEEdKP6rmer5Ix1jT0BzlQbaxrLSl7vWgVhIH/F3yQx7t1Cv+q5sKeb+eZjDdOH2QaFcHTRoaXe1maWOL8QRZkQtq87/7lewhZTnZ9AmRGZV/dwt4XIa/6xaWJvyU7btn6gcxW+yOM1cgbDyw81fKN+1ESCDPn1sMiRMbfCSSJ73Lv5R9Sqmhbb+84wu6EFS6fPphVKTXa8H41SLjzLYHQd9zGkkUfRJphW1i7bMjcYKPUd4qydvRArA3VjmrSS7oKNYGQMyfnHk7zRsX+ZVN6KHMOS7gkNMnScD/jsA0NlWb//CXVLnjOZ3wwSxMr68gWhfnZHqlYo6glk6xMD0LfFHxVg7MdhEc6/MSF2eU64i6EHis74v1sB+E2NbaFWe72AHYXwvh9u6L/xoClWd2wwRHN/8KDOOcbivC6I6ufMMxPGyVBmm78Ug0K3Ql6EIqA8/fxHdozKUS2eRD0eO6kB6ETFrhYpWjQC3wnL9Uiij6JoBD2eIav1yiNxzhvYUxnrZo/oprWyvTxFmZvwkxZygtt5gI4bNALKcq9m99HHzIzEIdHs1ZtYx2dKyvax8NYvQnNwM86bm1ppmJUQi9rbi4bBr3v5O9jlGbilXDZ2LfQrDh/iq395HRpOELHk9W31oykizbV/i9MTpeGIoyTqSA8z8/AUrjyEjB/7gbJ6dJQhHEyVXAyjQNCI32Ym8PHRGfbegTQeiPj+Mnp0lCEbYk9hCieXrYRYUrwTuf+2TgJC7J5CvXplUtrEB6dD/g65GCE1Zxo/KXparRMB1LHnxvCGej1nQEJTWby6uaRCphSD+Libyn58iTM8AGfaxuMUInnZH3H0NKfixE2ni+L3MDP0Q1MWA5lzm2up+79CV3fcB3p9xGJjkjIPacoePgeQZjOZIz/FhtC9Cn0isWgOPk+bGtlR9MowhNPOWzNAGre7yTsLE2QUIoPuwae/EqcHUENv3vGhn5AeGjCSjkn//4d00nvUEFCd/+WuWAwFzEOQl6uZk3W3MUwXsWxwURcZAlCvNuUnFfvFCBMnvCrRPPM0IgyrGis1hUiaANCsHHWHCxGGz9hhsnaPxbRIBpvDGCrFInk/zmUIz3+PA5Cv8JEUG+dWlQf42kNG+pa/vS/jUAUK0O95TlGwoxZqJSZGqyfKcYkno2xhvMh9OtXx1fHop+aPCP8SsEZ6B3PSRB+VdFdbr0zMMYKVBt2E0B9pXKxmma9bC27I70vf0vjIuTlQLDa6m5kUESGjAOo6jpqRLtvamrkOzNHKCUvSsEaF58PLJ0QeJUNtD1I1xl6FZbFjo/o1sHni8e+kEVThgO9wdpF4yLMOA7PZsx40qzUPp19iZNxCK4XklE8+qhyJ+TrO0dEuRekhjOO10OoYQBdU/0enR3XVtTXxx/CTXPU+dfW2Aj/J0eN1/ra6ttLTZERiONUqxRF8e4OoteKg7FS/OpyhKFyeli7/GdrrR6PzfE3ZwKEvs+8FV8yd+WH1t7+JaWGhZHSVS/auhrC8a9UP1JL9e3p/l7rhxVX5bVZT4SjuoZ7NAFCzzNNt+iUi1nOmQjDeu3Vk63jncWlg5MoUoMxir78vLS7c7z1x6vachgKxpm/4heLxXLgdZa/jkH/D9X6qyTrNqx/AAAAAElFTkSuQmCC",
    category: "Expense",
    type: "Purchase",
    date: "01/03/23",
    time: "08:00am",
    amount: "200,000",
    refID: "1757369801",
    action: "View",
  },
  {
    name: "9mobile Airtime Top up",
    imageURL:
      "https://cdn.punchng.com/wp-content/uploads/2017/07/19170207/9Mobile-Telecom-Logo.jpg",
    category: "Expense",
    type: "Airtime & Internet",
    date: "01/03/23",
    time: "10:34pm",
    amount: "2,500",
    refID: "1757369801",
    action: "view",
  },
  {
    name: "Bianco Superstore",
    imageURL:
      "https://flyclipart.com/thumb2/amazon-buy-logo-online-shop-icon-499798.png",
    category: "Expense",
    type: "Purchase",
    date: "01/03/23",
    time: "10:34pm",
    amount: "10,000",
    refID: "1757369801",
    action: "view",
  },
  {
    name: "Airtel Airtime Top up",
    imageURL:
      "https://e1.pxfuel.com/desktop-wallpaper/26/917/desktop-wallpaper-airtel-logo.jpg",
    category: "Expense",
    type: "Airtime & Internet",
    date: "01/03/23",
    time: "10:34pm",
    amount: "5,000",
    refID: "1757369801",
    action: "view",
  },
  {
    name: "Charley Enterprise",
    imageURL:
      "https://flyclipart.com/thumb2/amazon-buy-logo-online-shop-icon-499798.png",
    category: "Expense",
    type: "Purchase",
    date: "01/03/23",
    time: "10:34pm",
    amount: "490,000",
    refID: "1757369801",
    action: "view",
  },
  {
    name: "MTN Airtime Top up",
    imageURL:
      "https://seeklogo.com/images/M/mtn-logo-40644FC8B0-seeklogo.com.png",
    category: "Expense",
    type: "Airtime & Internet",
    date: "01/03/23",
    time: "10:34pm",
    amount: "10,000",
    refID: "1757369801",
    action: "view",
  },
];

export default data;
