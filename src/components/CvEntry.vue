<template>
  <div class="cv-container">
      <div class="timespan" style="grid-area:timespan">
          <b>{{formatDate(from)}} - {{formatDate(to)}}</b>
      </div>
      <div class="content" style="grid-area:content">
          <div class="accent" style="margin-bottom:5px">{{title}}</div>
          <div class="body-font" v-html="description"></div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String, 
        from: String, 
        to: {
            default: 'Present'
        },
        dateformat: {
            default: () => { return { year: 'numeric', month: 'short' } }
        }
    },
    methods: {
        formatDate(dateString) {
            if (dateString == 'Present')
                return dateString

            let date = new Date(dateString)
            const dateTimeFormat = new Intl.DateTimeFormat('en-US', this.dateformat);
            
            return dateTimeFormat.format(date)
        }
    }
}
</script>

<style>
.cv-container {
    display: grid;
    grid-template-columns: 0.5fr 2fr;
    grid-template-areas: "timespan content";
}

.timespan {
    padding: 15px 15px 15px 0;
    text-align: right;
    color: var(--accent) !important;
}

.content {
    padding: 15px 0 15px 15px;
    text-align: left;
}

@media (max-width: 700px) {
    .cv-container {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-template-areas: 
        "content"
        "timespan"
        ;
    }

    .timespan {
        text-align: left;
        padding: 5px 15px 25px 15px;
    }

    .content {
        padding: 25px 15px 5px 15px;
    }
}
</style>